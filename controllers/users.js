var bcrypt = require('bcrypt');
const path = require('path');
var { db, auth } = require(path.join(__dirname, '../firebaseConfig/database'));
const admin = require('firebase-admin');
const fieldValue = admin.firestore.FieldValue; 

const getHashedPassword = (password) => {
  const salt = bcrypt.genSaltSync(2);
  return bcrypt.hashSync(password, salt);
}

const isPasswordRight = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

const register = async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(500).json('Missing credentials');
  }

  const hash = getHashedPassword(password);

  auth()
  .createUser({email, password, displayName: name})
  .then(user => addUser(user.uid, email, name, hash, res))
  .catch(error => res.status(500).send(error.message));
}

const addUser = async(uid, email, name, password, res) => {
  await db.collection("users").doc(uid).set({email, name, password})
  .then(docRef => res.status(200).send(uid))
  .catch(error =>  res.status(500).send(error.message));
}

const login = async(req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Missing credentials');
  }

  auth().getUserByEmail(email)
  .then( userRecord => checkUser(userRecord, password, res))
  .catch(error => res.status(404).send("User not found"));
}

const checkUser = (userRecord, password, res) => {
  const uid = userRecord.uid;
  db.collection("users").doc(uid).get().then(function(doc) {
    if (doc.exists) {
      isPasswordRight(password, doc.data().password)
      ? res.status(200).send({ ...doc.data(), uid})
      : res.status(400).send("Wrong password");
    } else {
      res.status(404).send("User not found");
    }
  }).catch(function(error) {
    res.status(500).send("Database error" + error);
  });
}

const getUser = async(req, res) => {
  let id = req.params.id;
  await db.collection("users").doc(id).get()
  .then(async function(doc) {
    const user = await buildUser(doc.data());
    res.status(200).send(user);
  })
  .catch(error => {
    res.status(404).send("Not found" + error);
  });
}

const addItem = async(req, res) => {
  let itemID = req.body.id;
  let id = req.params.id;

  await db.collection("users").doc(id)
  .update({
    wishlist: fieldValue.arrayUnion( db.doc('/items/' + itemID))
  })
  .then(function() {
    res.status(200).send("Item successfully added!");
  })
  .catch(function(error) {
    console.log(error);
    res.status(500).send("Error adding item: " + error);
  });
}
  
const deleteItem = async(req, res) => {
  let id = req.body.id;
  let uid = req.body.uid;
  await db.collection("users").doc(uid)
  .update({
    wishlist: fieldValue.arrayRemove( db.doc('/items/' + id))
  })
  .then(function() {
    res.status(200).send("Item successfully removed!");
  })
  .catch(function(error) {
    console.log(error);
    res.status(500).send("Error removing item: " + error);
  });
}
  
const buildUser= async (data) => {
  let user = { 
    name: data.name, 
    email: data.email, 
    wishlist: []
  }

  if(data.wishlist) {
    for(let item of data.wishlist) {
      let collection = item._path.segments[0];
      let doc = item._path.segments[1];
      await db.collection(collection).doc(doc).get().then(function(doc) {
        user.wishlist.push(doc.data());
      });
    }
  }

  return user;
}

module.exports = {
  getUser,
  register,
  login,
  addItem,
  deleteItem
};
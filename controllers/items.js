const path = require('path');
var { db } = require(path.join(__dirname, '../firebaseConfig/database'));

const getItems = async function (req, res) {
  let items = [];
  await db.collection("items").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      items.push(doc.data());
      });
  });
  res.send(items);
}

const getItem = async(req, res) => {
  let item;
  let id = req.params.id;
  await db.collection("items").doc(id).get().then(function(doc) {
    item = { ...doc.data()};
  });
  res.send(item);
}

const addItem = async(req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let item = req.body.newItem;
  console.log(item)
  await db.collection("items").doc(item.id).set({...item})
  .then(function() {
    res.send("Document successfully added!" + item.name);
  })
  .catch(function(error) {
    res.send("Error adding document: ", error);
  });
}
  
const deleteItem = async(req, res) => {
  let id = req.params.id;
  await db.collection("items").doc(id).delete().then(function() {
    res.send("Document successfully deleted!");
  }).catch(function(error) {
    res.send("Error removing document: ", error);
  });
}
  
const updateItem = async(req, res) => {
  let id = req.params.id;
  let item = req.body;
  await db.collection("items").doc(id).set({...item})
  .then(function() {
    res.send("Document successfully updated!" + item.name);
  })
  .catch(function(error) {
    res.send("Error updating document: ", error);
  });
}
  
module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem, 
  updateItem
};
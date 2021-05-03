var admin = require("firebase-admin");
var serviceAccount = require("./giftee-39315-firebase-adminsdk-7v0db-bbabe99d07.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { db: db, auth: admin.auth };


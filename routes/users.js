const path = require('path');
const { getUser, register, login, addItem, deleteItem } = require(path.join(__dirname, "../controllers/users"));
var express = require('express');
var router = express.Router();


router.post("/login", login);
router.post("/user/new", register);
router.get("/user/:id", getUser);
router.put("/user/:id", addItem);
router.delete("/user", deleteItem);

module.exports = router;


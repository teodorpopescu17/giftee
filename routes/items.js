const path = require('path');
const { getItems, getItem, addItem, deleteItem, updateItem } = require(path.join(__dirname, "../controllers/items"));
var express = require('express');
var router = express.Router();

router.get("/wishlist", getItems);
router.get("/wishlist/:id", getItem);
router.post("/wishlist/add", addItem);
router.delete("/wishlist/:id", deleteItem);
router.put("/wishlist/edit/:id", updateItem);

module.exports = router;


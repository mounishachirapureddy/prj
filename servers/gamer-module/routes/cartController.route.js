const express = require("express");
const router = express.Router();
const {itemsCollected} = require("../controllers/cartController");

router.post("/addItem",itemsCollected);

module.exports = router;
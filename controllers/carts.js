const auth = require("../middlewares/auth");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const { Cart } = require("../models/cart");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const result = await Cart.find();
  res.send(result);
});
router.put("/", auth, (req, res) => {});
router.delete("/", auth, (req, res) => {});

router.post("/", auth, async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  const userId = req.body.userId;
  const cart = new Cart({
    userId: userId,
    items: items
  });
  const result = await cart.save();
  res.send(result);
});

module.exports = router;

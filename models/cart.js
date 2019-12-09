const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const items = new mongoose.Schema({
  itemId: String,
  noOfItems: Number
});
const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [items]
});

const Cart = mongoose.model("Cart", cartSchema);

exports.Cart = Cart;

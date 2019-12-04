const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      itemId: String,
      noOfItems: Number
    }
  ]
});

const Cart = mongoose.model("Cart", cartSchema);

exports.Cart = Cart;

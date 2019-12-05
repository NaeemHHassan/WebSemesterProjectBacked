const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publicationDate: {
    type: String,
    default: Date.now,
    required: true
  },
  quantityInStock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  reviews: {
    type: [String],
    required: false
  },
  ratting: {
    type: Number
  }
});
const Book = mongoose.model("Book", bookSchema);
exports.Book = Book;

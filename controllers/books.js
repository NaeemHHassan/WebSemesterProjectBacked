const auth = require("../middlewares/auth");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const { Book } = require("../models/book");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const book = await Book.findById(req.params.id);
  console.log(book);
  if (!book) {
    res.status(400).send("Book Not Found");
  } else {
    res.send(book);
  }
});

router.get("/", async (req, res) => {
  res.send(await Book.find());
});
router.post("/", async (req, res) => {
  const attrib = _.pick(req.body, [
    "title",
    "author",
    "publicationDate",
    "quantityInStock",
    "price",
    "description",
    "ratting"
  ]);

  console.log(attrib);

  const book = new Book(attrib);

  const books = await book.save();
  res.send(books);
});

router.delete("/:id", auth, async (req, res) => {
  const id = req.params.id;
  const book = await Book.findByIdAndDelete(id);
  if (book) res.send(book);
  else {
    res.status(400).send("Book Not Found");
  }
});

router.put("/:id", auth, async (req, res) => {
  const attrib = _.pick(req.body, [
    "title",
    "author",
    "publicationDate",
    "quantityInStock",
    "price",
    "description",
    "reviews",
    "ratting"
  ]);
  const book = await Book.findOneAndUpdate(
    req.param.id,
    {
      $set: {
        title: attrib.title,
        author: attrib.author,
        publicationDate: attrib.publicationDate,
        quantityInStock: attrib.quantityInStock,
        price: attrib.price,
        description: attrib.description,
        reviews: attrib.reviews,
        ratting: attrib.ratting
      }
    },
    { new: true }
  );
  res.send(book);
});
module.exports = router;

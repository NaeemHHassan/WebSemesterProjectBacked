const auth = require("../middlewares/auth");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const { Book } = require("../models/book");
const express = require("express");
const router = express.Router();

router.get("/:id", auth, async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(400).send("Book Not Found");
  } else {
    res.send(book);
  }
});

router.get("/", auth, async (req, res) => {
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
    "reviews",
    "ratting"
  ]);

  const book = new Book(attrib);

  const result = await book.save();
  res.send(result);
});

router.delete("/:id", auth, (req, res) => {
  const id = req.params.id;
  const book = Book.findByIdAndDelete(id);
  if (book) res.send(book);
  else {
    res.status(400).send("Book Not Found");
  }
});

router.put("/:id", auth, async (req, res) => {
  console.log(b);
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

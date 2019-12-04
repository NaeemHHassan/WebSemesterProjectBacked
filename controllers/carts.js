const auth = require("../middlewares/auth");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const Cart = require("../models/cart");
const express = require("express");
const router = express.Router();

router.get("/", auth, (req, res) => {});
router.put("/", auth, (req, res) => {});
router.delete("/", auth, (req, res) => {});
router.post("/", auth, (req, res) => {});

module.exports = router;

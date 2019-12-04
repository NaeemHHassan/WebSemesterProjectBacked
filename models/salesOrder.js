const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const salesOrderSchema = new mongoose.Schema({
  order_date: {
    type: String,
    required: true
  },
  items: [
    {
      itemId: String,
      noOfItems: Number
    }
  ],
  total: {
    type: Number,
    required: true
  },
  user_id: {
    type: Number,
    required: true
  },
  inserted_at: {
    type: Date,
    default: Date.now
  },
  coupan_id: {
    type: Number,
    required: true
  }
});

const SalesOrderSchema = mongoose.model("SalesOrderSchema", salesOrderSchema);

exports.SalesOrderSchema = SalesOrderSchema;

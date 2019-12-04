const config = require("config");
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },

  order_id: {
    type: String,
    required: true
  },
  transaction_date: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  inserted_at: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

exports.Transaction = Transaction;

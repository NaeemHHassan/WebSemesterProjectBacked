const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const users = require("./controllers/users");
const carts = require("./controllers/carts");
const books = require("./controllers/books");
const express = require("express");
const cors = require("cors");
const auth = require("./controllers/auth");
const app = express();

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

mongoose
  .connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(cors());
app.use("/api/users", users);
app.use("/api/books", books);
app.use("/api/auth", auth);
app.use("/api/cart", carts);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

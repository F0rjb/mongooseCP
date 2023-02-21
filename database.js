const { default: mongoose } = require("mongoose");
require("dotenv").config();
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

mongoose
  .connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to Atlas MongoDB successfully!");
  })
  .catch((error) => {
    console.log("Error connecting to Atlas MongoDB: ", error.message);
  });

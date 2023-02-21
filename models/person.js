const mongoose = require("mongoose");
personSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: Array,
});
module.exports = mongoose.model("Person", personSchema);

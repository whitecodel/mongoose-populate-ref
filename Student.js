const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  father_name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Student", schema);

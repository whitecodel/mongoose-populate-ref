const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("User", schema);

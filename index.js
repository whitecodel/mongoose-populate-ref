const mongoose = require("mongoose");
const User = require("./User");
const Student = require("./Student");

//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1/populate";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
    console.error("Error connecting to mongo", err);
});

const saveUser = async (student) => {
    const user = User({
        student,
        username: "bhawani",
        password: "123456",
    });
    await user.save();
    console.log("user saved");
};

const saveStudent = async () => {
    const student = Student({
        name: "bhawani",
        father_name: "brajmohan",
    });
    const saved_student = await student.save();
    console.log("student saved");
    return saved_student;
};

const getUserAllDetail = async () => {
    // const user = await User.findOne({ username: "bhawani" });

    const user = await User.findOne({ username: "bhawani" }).populate(
        "student"
    );
    // const student = await Student.findOne({ _id: user.student });
    console.log(user);
    // console.log(student);
};

// // saveUser();
// // saveStudent();

// saveStudent().then((student) => {
//     saveUser(student._id);
// });

getUserAllDetail();

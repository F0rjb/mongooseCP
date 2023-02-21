var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
let hey = process.env.Hey;
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

mongoose
  .connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to Atlas MongoDB successfully!");
  })
  .catch((error) => {
    console.log("Error connecting to Atlas MongoDB: ", error.message);
  });
mongoose.set("strictQuery", false);
const Person = require("./models/person");
const person = require("./models/person");

var app = express();
const run = async () => {
  // Find a single user
  // try   {const user = await Person.find()}
  //Find All users
  //   try {
  //     const user = await Person.find();
  //     console.log(user);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //Creating an instance
  // const query = new Person.find();
  // console.log(query);
  //Adding Many persons with an array of objects
  // Person.create([
  //   { name: "Ahmed", age: 26, favoriteFood: ["Mango"] },
  //   { name: "Gley", age: 69, favoriteFood: ["Mtabga"] },
  //   { name: "FOO", age: 69, favoriteFood: ["Mtabga"] },
  // ])
  //   .then(() => console.log("they were added"))
  //   .catch((e) => console.log(e.message));
  //Adding a single user
  // const user = new Person({ name: "Ahmed", age: 26, favoriteFood: ["Mango"] });
  // user.save().then(() => console.log("user saved"));
  // Finding a single user
  // try {
  //   const oneFound = await Person.findOne({ name: "FOO" });
  //   console.log(oneFound);
  // } catch (e) {
  //   console.log(e.message);
  // }
  // try {
  //   const foundById = await Person.findById("63f4751e8921f603c2344697");
  //   console.log(foundById);
  // } catch (error) {
  //   console.log(error.message);
  // }
  // Update one element
  //   try {
  //     const onePerson = await Person.updateOne(
  //       { name: "Ahmed" },
  //       { $set: { name: "Aziz" } },
  //       { new: true }
  //     );
  //     console.log(onePerson);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // using FindOneAndupdate
  // try {
  //   const foundOneAndupdated = await Person.findOneAndUpdate(
  //     { name: "Aziz" },
  //     { age: 12 }
  //   );
  //   console.log(foundOneAndupdated);
  // } catch (error) {
  //   console.log(error.message);
  // }
  //Find by id and remove
  // try {
  //   const FoundAndRemoved = await Person.findByIdAndRemove(
  //     "63f47475c7771c16dbae0db8"
  //   );
  //   console.log(FoundAndRemoved);
  // } catch (e) {
  //   console.log(e.message);
  // }
  //Find And remove a document
  // try {
  //   const Deletethedec = await Person.remove({ name: "Ahmed" });
  // } catch (error) {
  //   console.log(error.message);
  // }
  //Find with help
  //   try {
  //     const foundwithhelpers = await Person.find({ favouriteFood: ["Mtabga"] })
  //       .sort(1)
  //       .limit(2);
  //     console.log(foundwithhelpers);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
};

run();
// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   console.log(hey);
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// // });
// app.listen("5000");

module.exports = app;

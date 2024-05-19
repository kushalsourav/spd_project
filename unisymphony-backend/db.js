
const mongoose = require("mongoose");

const dataBaseUrl =
  "mongodb+srv://unisymphony:unisymphony@unisymphony.1k6xyeg.mongodb.net/unisymphony";
mongoose.connect(dataBaseUrl, { useNewUrlParser: true });


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB connected");
});



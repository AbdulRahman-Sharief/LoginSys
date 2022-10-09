const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const fs = require("fs");

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected Sucessfully!");
  }
);

const users = JSON.parse(fs.readFileSync(`${__dirname}/DATA.json`, "utf-8"));
const importData = async () => {
  try {
    await User.create(users);
    console.log(`DATA LOADED SUCCESSFULLY!`);
  } catch (err) {
    console.log(err.message);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log(`DATA DELETED SUCCESSFULLY!`);
  } catch (err) {
    console.log(err.message);
  }
  process.exit();
};

if (process.argv[2] === "--import") importData();
if (process.argv[2] === "--delete") deleteData();

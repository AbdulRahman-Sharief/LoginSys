const mongoose = require("mongoose");

const connectDB = function (DB) {
  return mongoose.connect(
    DB,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    () => {
      console.log(
        `connected to DATABASE ((${DB.split("/")[3]})) Successfully!!`
      );
    }
  );
};
module.exports = connectDB;

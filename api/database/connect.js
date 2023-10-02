const mongoose = require("mongoose");

const connect = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connect;

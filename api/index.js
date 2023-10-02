require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const connect = require("./database/connect");
const authenticationRoute = require("./routes/auth");

// Middlewares
app.use(express.json());

// Routes
app.use("/api/auth", authenticationRoute);

// Connection to database + running express server
const start = async () => {
  try {
    await connect(process.env.MONGO_DB);
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const connect = require("./database/connect");
const authenticationRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");

// Middlewares
app.use(express.json());

// Routes
app.use("/api/auth", authenticationRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);

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

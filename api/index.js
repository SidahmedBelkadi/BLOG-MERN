require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const connect = require("./database/connect");
const authenticationRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");
const categoriesRoutes = require("./routes/categories");

const path = require("path");
const multer = require("multer");

// Middlewares
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
// Routes
app.use("/api/auth", authenticationRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/categories", categoriesRoutes);

// File Uploads

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("photo"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

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

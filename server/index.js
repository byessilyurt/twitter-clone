import express from "express";
const app = express();

import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import cors from "cors";
import morgan from "morgan";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import tweetRoute from "./routes/tweets.js";
import imageRoute from "./routes/images.js";

dotenv.config();
const PORT = 8800;

mongoose.connect(
  "mongodb+srv://yessilyurt:<password>@twitter-cluster.nwrl0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    ("mongodb connected");
  }
);

app.listen(8800, () => {
  console.log("Backend server is running!");
});

app.get("/", (req, res) => {
  res.send("Homepage");
});

process.env.REACT_APP_MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongoDB");
  };

//middleware

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/tweets", tweetRoute);
app.use("/api/images", imageRoute);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => {
  console.log(`backend is running at ${PORT}`);
});

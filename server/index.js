import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";

dotenv.config();
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

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);

import express from 'express'
import User from "../models/User.js";
const router = express.Router();
//REGISTER
router.get("/register", async (req, res) => {
  try {
    //create new user
    const newUser = new User({
      username: "ahmet",
    });
    //save user and respond
    const user = await newUser.save();
    res.status(200).json("user saved");
  } catch (err) {
    res.status(500).json("error occured")
  }
});
export default router
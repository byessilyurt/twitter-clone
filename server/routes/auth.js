import express from "express";
import User from "../models/User.js";
import bcyrpt from "bcrypt";

const router = express.Router();

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcyrpt.genSalt(10);
    const hashedPassword = await bcyrpt.hash(req.body.password, salt);
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("User not found");

    const validPassword = await bcyrpt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong password!");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

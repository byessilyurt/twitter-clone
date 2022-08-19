import Item from "../models/Image.js";
import express from "express";
const router = express.Router();

// get Items
router.get("/", async (req, res) => {
  console.log("get items");
  try {
    const item = await Item.find();
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//create item
router.post("/", async (req, res) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(403).json(error);
  }
});

export default router

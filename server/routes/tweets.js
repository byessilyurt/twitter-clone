import express from "express";
import User from "../models/User.js";
import Tweet from "../models/Tweet.js";

const router = express.Router();

// create a tweet
router.post("/new", async (req, res) => {
  const newTweet = new Tweet(req.body);
  try {
    const savedTweet = await newTweet.save();
    res.status(200).json(savedTweet);
  } catch (err) {
    res.status(500).json(err);
  }
});
// edit a tweet
router.put("/:id/edit", async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (tweet.userId === req.body.userId) {
      await tweet.updateOne({ $set: req.body });
      res.status(200).json("the tweet has been updated");
    } else {
      res.status(403).json("you can update only your tweet");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// read a tweet
router.get("/:id", async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    res.status(200).json(tweet);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a tweet
router.delete("/:id", async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (tweet.userId === req.body.userId) {
      await tweet.deleteOne();
      res.status(200).json("the tweet has been deleted");
    } else {
      res.status(403).json("you can delete only your tweet");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// like-unlike a tweet
router.put("/:id/like", async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet.likes.includes(req.body.userId)) {
      await tweet.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The tweet has been liked");
    } else {
      await tweet.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The tweet has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// get timeline
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userTweets = await Tweet.find({ userId: currentUser._id });
    const friendTweets = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Tweet.find({ userId: friendId });
      })
    );
    res.status(200).json(userTweets.concat(...friendTweets));
  } catch (err) {
    res.status(500).json(err);
  }
});
// get all tweets
router.get("/", async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.status(200).json(tweets);
  } catch (err) {
    res.status(404).json(err);
  }
});

// get user's all tweets
router.get("/profile/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const tweets = await Tweet.find({ userId: user._id });
    res.status(200).json(tweets);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

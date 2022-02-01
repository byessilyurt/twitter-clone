import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    nameAndSurname: {
      type: String,
      min: 3,
      max: 40,
    },
    username: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      max: 50,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      required: true,
    },
    profilePicture: {
      image: String,
    },
    coverPicture: {
      image: String,
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    biography: {
      type: String,
      max: 180,
    },
    location: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);

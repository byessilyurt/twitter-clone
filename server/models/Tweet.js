import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema(
  {
      userId:{
          type:String,
          required:true
      },
      content:{
          type:String,
          max:280
      },
      image:{
          type:String
      }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);

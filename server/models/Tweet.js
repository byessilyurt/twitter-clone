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
      likes:{
          type:Array,
        default:[]
      },
      image:{
          type:String
      }
  },
  { timestamps: true }
);

export default mongoose.model("Tweet", TweetSchema);

import { Button } from "@mui/material";
import profilePic from "../../../assets/profile_pic/my_profile_pic.jpg";
import tweetImg from "../../../assets/tweet_img/astronaut.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import React, { useEffect,useState } from "react";
import "../styles/tweet.css";
import {format} from "timeago.js"
import axios from 'axios'
function Tweet({tweet}) {
  const [user, setUser] = useState()
  useEffect(() => {
    async function getUser(){
      const res = await axios.get(`http://localhost:8800/api/users/${tweet.userId}`) 
      setUser(res.data)
    }
    getUser()
  }, [tweet.userId]);  
  return (
    <div className="tweet-container">
      <div className="feed-top-left">
        <img src={user?.profilePicture} className="tweet-profile-pic" alt="profile" />
      </div>
      <div className="feed-right">
        <div className="feed-right-top">
          <div className="feed-right-top-left">
            <div className="usernickname">{user?.email}</div>
            <div className="username">@{user?.username}</div>
            <div className="when">· {format(tweet.createdAt)}</div>
          </div>
          <div className="feed-right-top-right">
            <Button className="more-icon">
              <MoreHorizIcon />
            </Button>
          </div>
        </div>
        <div className="feed-right-center">
          <span className="feed-tweet"> {tweet.content}</span>
          <img src={tweetImg} className="tweet-img" alt="tweet" />
        </div>
        <div className="feed-right-bottom">
          <Button color="inherit" className="feed-bottom-button-container">
            <ChatBubbleOutlineIcon className="feed-bottom-icon" />
            <span className="feed-bottom-counter">32</span>
          </Button>
          <Button color="inherit" className="feed-bottom-button-container">
            <CompareArrowsIcon className="feed-bottom-icon" />
            <span className="feed-bottom-counter">451</span>
          </Button>
          <Button color="inherit" className="feed-bottom-button-container">
            <FavoriteBorderIcon className="feed-bottom-icon" />
            <span className="feed-bottom-counter">1232</span>
          </Button>
          <Button color="inherit" className="feed-bottom-button-container">
            <IosShareIcon className="feed-bottom-icon" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

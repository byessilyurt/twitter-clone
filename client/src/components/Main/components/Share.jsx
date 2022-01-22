import { Button, IconButton } from "@mui/material";
import "../styles/share.css";
import profilePic from "../../../assets/profile_pic/my_profile_pic.jpg";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import GifIcon from "@mui/icons-material/Gif";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MoodIcon from "@mui/icons-material/Mood";
import DateRangeIcon from "@mui/icons-material/DateRange";
import React, {useRef,useContext, useState} from 'react'
import {AuthContext} from '../../../context/AuthContext'
import axios from "axios";
function Share() {  
  const {user} = useContext(AuthContext)
  const [tweetContent, setTweetContent] = useState()
  const handleTweet = () => {
    async function sendTweet(){
      const res = await axios.post("http://localhost:8800/api/tweets/new", {content:tweetContent, userId:user._id})
      console.log(res.data);
    }
    sendTweet()
    window.location.reload()
  }
  return (
    <div className="share-container">
      <div className="main-profile-pic">
        <img src={profilePic} className="share-profile-pic" alt="" />
      </div>
      <div className="emptyDiv"></div>
      <div className="input-and-button">
        <input placeholder="Neler Oluyor?" onChange={(e) => setTweetContent(e.target.value)} />
        <div className="icons-and-button-container">
          <div className="main-icons">
            <IconButton className="main-icon" size="small">
              <CropOriginalIcon />
            </IconButton>
            <IconButton className="main-icon" size="small">
              <GifIcon />
            </IconButton>
            <IconButton className="main-icon" size="small">
              <EqualizerIcon />
            </IconButton>
            <IconButton className="main-icon" size="small">
              <MoodIcon />
            </IconButton>
            <IconButton className="main-icon" size="small">
              <DateRangeIcon />
            </IconButton>
          </div>
          <div className="button-container">
            <Button className="tweet-button" variant="contained" onClick={handleTweet}>
              Tweetle
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;

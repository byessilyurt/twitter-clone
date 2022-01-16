import { Button, IconButton } from "@mui/material";
import "../styles/share.css";
import profilePic from "../../../assets/profile_pic/my_profile_pic.jpg";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import GifIcon from "@mui/icons-material/Gif";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MoodIcon from "@mui/icons-material/Mood";
import DateRangeIcon from "@mui/icons-material/DateRange";

function Share() {
  return (
    <div className="share-container">
      <div className="main-profile-pic">
        <img src={profilePic} className="share-profile-pic" alt="" />
      </div>
      <div className="emptyDiv"></div>
      <div className="input-and-button">
        <input placeholder="Neler Oluyor?" />
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
            <Button className="tweet-button" variant="contained">
              Tweetle
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;

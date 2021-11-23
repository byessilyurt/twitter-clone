import "./styles/feed.css";
import { IconButton } from "@mui/material";
import profilePic from "../../assets/profile_pic/profilePic.jpg";
import tweetImg from "../../assets/tweet_img/astronaut.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

function Feed() {
  return (
    <div className="tweet-container">
      <div className="feed-left">
        <img src={profilePic} className="tweet-profile-pic" alt="profile" />
      </div>
      <div className="feed-right">
        <div className="feed-right-top">
          <div className="feed-right-top-left">
            <div className="usernickname">Yusuf Yeşilyurt</div>
            <div className="username">@yessilyurt</div>
            <div className="when">· 9 mins ago</div>
          </div>
          <div className="feed-right-top-right">
              <IconButton className="more-icon">
              <MoreHorizIcon />
              </IconButton>
          </div>
        </div>
        <div className="feed-right-center">
        <span className="feed-tweet"> Hey this is my first tweet!</span>
        <img src={tweetImg} className="tweet-img" alt="tweet" />
        </div>
        <div className="feed-right-bottom">
          <IconButton className="reply-container">
          <span className="feed-reply-counter">32</span>
          <ChatBubbleOutlineIcon className="feed-bottom-icon" />
          </IconButton>
          <IconButton className="retweet-container">
          <span className="feed-retweet-counter">451</span>
          <CompareArrowsIcon className="feed-bottom-icon"/>
          </IconButton>
          <IconButton className="like-container">
          <span className="feed-like-counter">1232</span>
          <FavoriteBorderIcon className="feed-bottom-icon"/>
          </IconButton>
          <IconButton className="share-container">
          <IosShareIcon className="feed-bottom-icon"/>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Feed;

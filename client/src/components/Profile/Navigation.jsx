import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton, Typography } from "@mui/material";
import {Link} from 'react-router-dom'
import './styles/navigation.css'

function Navigation({ user,tweetCount }) {

  return (
    <div className="navigation-container">
      <div className="back-space">
        <Link to="/" >
        <IconButton style={{color:"black"}}>
        <KeyboardBackspaceIcon />
        </IconButton>
        </Link>
      </div>
      <div className="name-and-tweet-count">
        <Typography className="name">{user?.nameAndSurname}</Typography>
        <Typography className="tweet-count">{tweetCount > 1 ? tweetCount + " tweets" : tweetCount ?  tweetCount + " tweet" : null }  </Typography>
      </div>
    </div>
  );
}

export default Navigation;

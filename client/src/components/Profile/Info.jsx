import { Typography } from "@mui/material";
import React from "react";
import "./styles/info.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Info({ user }) {
  return (
    <div className="info-container">
      <span className="info-name">{user?.nameAndSurname}</span>
      <span className="info-username">@{user?.username}</span>
      <span className="info-bio">{user?.biography}</span>
      <span className="info-location">
        <LocationOnIcon fontSize="small" />
        {user?.location}
      </span>
      <div className="follower-container">
      <span className="info-followings">
        <b>{user?.followings.length}</b> followings
      </span>
      <span className="info-followers">
        <b>{user?.followers.length}</b> followers
      </span>
      </div>
    </div>
  );
}

export default Info;

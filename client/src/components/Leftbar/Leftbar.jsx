import React, { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AppsIcon from "@mui/icons-material/Apps";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import profilePic from "../../assets/profile_pic/my_profile_pic.jpg";
import "./styles/leftbar.css";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Leftbar() {
  const { user } = useContext(AuthContext);
  const { logout } = useAuth0();

  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload();
    // console.log(window.location.origin);
    // logout({returnTo: window.location.origin})
  };
  return (
    <div className="leftbar-container">
      <div className="icons">
        <TwitterIcon className="icon twitter-color" fontSize="large" />
        <Link to="/" style={{ color: "black" }}>
          <IconButton color="inherit" className="icon" size="large">
            <HomeIcon fontSize="medium" />
          </IconButton>
        </Link>
        <IconButton className="icon" color="inherit" size="large">
          <AppsIcon fontSize="medium" />
        </IconButton>
        <IconButton className="icon" color="inherit" size="large">
          <MailOutlineIcon fontSize="medium" />
        </IconButton>
        <IconButton className="icon" color="inherit" size="large">
          <NotificationsNoneIcon fontSize="medium" />
        </IconButton>
        <Link to={`/profile/${user?.username}`} style={{ color: "black" }}>
          <IconButton className="icon" color="inherit" size="large">
            <PersonOutlineIcon fontSize="medium" />
          </IconButton>
        </Link>
        <IconButton className="icon" color="inherit" size="large">
          <MoreHorizIcon fontSize="medium" />
        </IconButton>
        <IconButton
          variant="contained"
          className="icon twitter-color"
          color="primary"
          size="large"
        >
          <CreateIcon fontSize="medium" />
        </IconButton>
      </div>
      <div className="icons left-profile-pic">
        <img
          src={user?.profilePicture}
          alt="profile-pic"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Leftbar;

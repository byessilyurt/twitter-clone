import React, {useContext} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AppsIcon from '@mui/icons-material/Apps';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';
import profilePic from '../../assets/profile_pic/my_profile_pic.jpg'
import './styles/leftbar.css'
import {AuthContext} from "../../context/AuthContext"
import {Link} from 'react-router-dom'

function Leftbar() {
  const {user} = useContext(AuthContext)
  const handleClick = () => {
      localStorage.removeItem("user")
      window.location.reload()
  }
  return (
    <div className="leftbar-container">
    <div className="icons">
      <IconButton className="icon twitter-color" size="large">
      <TwitterIcon fontSize="large"/>
      </IconButton>
      <Link to="/" style={{color:"black"}}>
      <IconButton  color="inherit"  className="icon" size="large">
      <HomeIcon fontSize="medium" />
      </IconButton>
      </Link>
      <IconButton className="icon" color="inherit" size="large">
      <AppsIcon fontSize="medium" />
      </IconButton>
      <IconButton className="icon" color="inherit" size="large">
      <MailOutlineIcon fontSize="medium"/>
      </IconButton>
      <IconButton className="icon" color="inherit" size="large">
      <NotificationsNoneIcon fontSize="medium"/>
      </IconButton>
      <Link to={`/profile/${user?.username}`} style={{color:"black"}} >
      <IconButton className="icon" color="inherit" size="large">
      <PersonOutlineIcon fontSize="medium"/>
      </IconButton>
      </Link>
      <IconButton className="icon" color="inherit" size="large">
      <MoreHorizIcon fontSize="medium"/>
      </IconButton>
      <IconButton variant="contained" className="icon twitter-color" color="primary" size="large">
      <CreateIcon fontSize="medium"/>
      </IconButton>
    </div>
    <div className="icons left-profile-pic">
      <img src={profilePic} alt="profile-pic" onClick={handleClick}/>
    </div>
    </div>
  )
}

export default Leftbar

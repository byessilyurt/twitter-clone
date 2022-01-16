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
import { useUserStore } from '../../context/userContext';
import './styles/leftbar.css'
function Leftbar() {
  const {logoutUser} = useUserStore()
  const handleClick = () => {
    logoutUser()
  }
  return (
    <div className="leftbar-container">
    <div className="icons">
      <IconButton className="icon twitter-color" size="large">
      <TwitterIcon fontSize="large"/>
      </IconButton>
      <IconButton  color="inherit"  className="icon" size="large">
      <HomeIcon fontSize="medium" />
      </IconButton>
      <IconButton className="icon" color="inherit" size="large">
      <AppsIcon fontSize="medium" />
      </IconButton>
      <IconButton className="icon" color="inherit" size="large">
      <MailOutlineIcon fontSize="medium"/>
      </IconButton>
      <IconButton className="icon" color="inherit" size="large">
      <NotificationsNoneIcon fontSize="medium"/>
      </IconButton>
      <IconButton className="icon" color="inherit" size="large">
      <PersonOutlineIcon fontSize="medium"/>
      </IconButton>
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

import {Typography} from '@material-ui/core'
import IconButton from '@mui/material/IconButton';
import FlareIcon from '@mui/icons-material/Flare';

import '../styles/topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <Typography variant="h6" className="title" >
        Anasayfa
      </Typography>
      <IconButton>
        <FlareIcon></FlareIcon>
      </IconButton>
    </div>
  )
}

export default Topbar

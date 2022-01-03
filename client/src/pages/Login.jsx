import React from "react";
import bgImg from "../assets/login/tw-bg.png";
import "./styles/login.css";
import TwitterIcon from '@mui/icons-material/Twitter';

function Login() {
  return (
    <div className="login-container">
      <div className="left">
      <TwitterIcon className="left-tw-icon" style={{fontSize:250}}/>
        <img src={bgImg} alt="background" className="login-background" />
      </div>
      <div className="right">
          <TwitterIcon/>
          <h1>Su anda ne yapiyorsun?</h1>
          <div className="form">
              <input type="email" />
              <input type="password" />
              <input type="password" />
              <button type="submit">Submit</button>
          </div>
      </div>
    </div>
  );
}

export default Login;

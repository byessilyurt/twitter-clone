import React from "react";
import bgImg from "../assets/login/tw-bg.png";
import "./styles/login.css";
import TwitterIcon from "@mui/icons-material/Twitter";

function Login() {
  return (
    <div className="login-container">
      <div className="left">
        <TwitterIcon className="left-tw-icon" style={{ fontSize: 250 }} />
        <img src={bgImg} alt="background" className="login-background" />
      </div>
      <div className="right">
        <TwitterIcon className="right-tw-icon" color="primary" />
        <div className="main-title-container">
          <span className="main-title-span">Şu anda olup bitenler</span>
        </div>
        <div className="secondary-title-container">
          <span className="secondary-title-span">Twitter'a bugün katıl.</span>
        </div>
        <div className="form-container">
          <form>
            <input type="email" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

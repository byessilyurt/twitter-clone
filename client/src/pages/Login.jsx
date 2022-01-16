import React, { useRef } from "react";
import bgImg from "../assets/login/tw-bg.png";
import "./styles/login.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useUserStore } from "../context/userContext";
import { CircularProgress } from "@material-ui/core";

function Login() {
  const {user, loginUser, isFetching} = useUserStore();
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(isFetching);
    loginUser({email:email.current.value, password:password.current.value})
    console.log(isFetching);
  };
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
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Username" ref={email} />
            <input type="password" placeholder="Password" ref={password} />
            <button type="submit">{ isFetching ? <CircularProgress/> : "Log in "}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

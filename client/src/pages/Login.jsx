import React, { useRef, useContext } from "react";
import bgImg from "../assets/login/tw-bg.png";
import "./styles/login.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import Skeleton from '@mui/material/Skeleton';
import { AuthContext } from "../context/AuthContext";
import { loginCall } from "../apiCalls";

function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
            <button type="submit" disabled={isFetching}>
              {isFetching ? "Loading" : "Log in "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

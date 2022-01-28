import React, { useRef, useContext } from "react";
import bgImg from "../assets/loginandregister/tw-bg.png";
import "./styles/login.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { AuthContext } from "../context/AuthContext";
import { loginCall } from "../apiCalls";
import {Link} from 'react-router-dom'

function Login() {
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { username: username.current.value, password: password.current.value },
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
            <input type="text" placeholder="Username" ref={username} />
            <input type="password" placeholder="Password" ref={password} />
            <button type="submit" >
              {isFetching ? "Loading" : "Log in "}
            </button>
          </form>
          <Link className="link-to-register" to="/register">Don't have an account yet? Join today.</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

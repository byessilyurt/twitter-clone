import React, { useRef, useContext,useState } from "react";
import bgImg from "../assets/loginandregister/tw-bg.png";
import "./styles/register.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { AuthContext } from "../context/AuthContext";
import { registerCall,loginCall } from "../apiCalls";
import { Link } from "react-router-dom";

function Register() {
  const email = useRef();
  const username = useRef()
  const password = useRef();
  const confirm = useRef();
  const [error, setError] = useState({})
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.current.value === confirm.current.value) {
      setError({password:undefined})
      registerCall({email:email.current.value, username:username.current.value, password:password.current.value})
      loginCall(
        { username: username.current.value, password: password.current.value },
        dispatch
      );
    } else {
      setError({password:"Passwords do not match"})  
    }
  };
  return (
    <div className="register-container">
      <div className="left">
        <TwitterIcon className="left-tw-icon" style={{ fontSize: 250 }} />
        <img src={bgImg} alt="background" className="register-background" />
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
            <input type="text" placeholder="Username" autofocus ref={username} />
            <input type="email" placeholder="Email" ref={email} />
            <input type="password" placeholder="Password" ref={password} />
            <input
              type="password"
              placeholder="Password again."
              ref={confirm}
            />
            {error["password"] && <div className="password-error">{error["password"]}</div> }
            <button type="submit" disabled={isFetching}>
              {isFetching ? "Loading" : "Sign up "}
            </button>
          </form>
          <Link className="link-to-login" to="/login">
            Already registered? Log in.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;

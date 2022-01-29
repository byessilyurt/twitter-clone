import React, { useEffect } from "react";
import Leftbar from "../components/Leftbar/Leftbar";
import Navigation from "../components/Profile/Navigation";
import Rightbar from "../components/Rightbar/Rightbar";
import Info from "../components/Profile/Info";
import ProfileTabs from "../components/Profile/ProfileTabs";
import { useParams } from "react-router";
import { getUserAndTweets } from "../apiCalls";
import { useState } from "react";
import coverImg from "../assets/profile_pic/cover_img.jpeg";
import burak from "../assets/profile_pic/burak.jpeg";
import "./styles/profile.css";
function Profile() {

  const [user, setUser] = useState();
  const [tweets, setTweets] = useState();
  const username = useParams().username;

  useEffect(() => {
    const requestUserAndTweets = async () => {
      const { resUser, resTweets } = await getUserAndTweets(username);
      setUser(resUser);
      setTweets(resTweets);
    };
    requestUserAndTweets();
  }, [username]);
  
  return (
    <div className="container">
      <div className="left-bar">
        <Leftbar />
      </div>
      <div className="middle">
        <Navigation user={user} tweetCount={tweets?.length} />
        <div className="cover-img">
          <img src={coverImg} alt="cover" />
        </div>
        <div className="profile-img">
          <img src={burak} alt="profile" />
        </div>
        <div className="user-info">
          <Info user={user} />
        </div>
        <div className="tabs">
          <ProfileTabs user={user} tweets={tweets} />
        </div>
      </div>
      <div className="right-bar">
        <Rightbar />
      </div>
    </div>
  );
}

export default Profile;

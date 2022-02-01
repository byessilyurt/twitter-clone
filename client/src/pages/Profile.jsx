import React, { useEffect } from "react";
import Leftbar from "../components/Leftbar/Leftbar";
import Navigation from "../components/Profile/Navigation";
import Rightbar from "../components/Rightbar/Rightbar";
import Info from "../components/Profile/Info";
import ProfileTabs from "../components/Profile/ProfileTabs";
import { useParams } from "react-router";
import { getUserAndTweets,setProfilePhoto, setCoverPhoto } from "../apiCalls";
import { useState } from "react";
import coverImg from "../assets/profile_pic/cover_img.jpeg";
import burak from "../assets/profile_pic/burak.jpeg";
import "./styles/profile.css";
import EditIcon from "@mui/icons-material/Edit";
import UploadImageToDB from "../components/Profile/UploadImageToDB";
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

  const handleClick = async() => {
    console.log("handleclickfired");
    const res = await setProfilePhoto({userId:user._id, image:"testFromClient"})
    console.log(res); 
  }

  return (
    <div className="container">
      <div className="left-bar">
        <Leftbar />
      </div>
      <div className="middle">
        <Navigation user={user} tweetCount={tweets?.length} />
        <div className="cover-img"></div>
        <div className="img-wrapper">
          <img src={coverImg} alt="cover" className="img-cover" />
          <div className="cover-overlay">
            <label htmlFor="hide-cover-upload" onClick={handleClick}>
              <EditIcon color="secondary" />
            </label>
            <input id="hide-cover-upload" type="file" />
          </div>
          <img src={burak} alt="profile" className="img-responsive" />
          <div className="img-overlay">
            <label htmlFor="hide-profile-upload">
              <EditIcon className="edit-icon" />
            </label>
            <input id="hide-profile-upload" type="file" />
          </div>
        </div>
        <div className="user-info">
          <Info user={user} />
        </div>
        <div className="tabs">
          <ProfileTabs user={user} tweets={tweets} />
        </div>
        <div className="upload-to-S3">{/* <UploadImageToDB /> */}</div>
      </div>
      <div className="right-bar">
        <Rightbar />
      </div>
    </div>
  );
}

export default Profile;

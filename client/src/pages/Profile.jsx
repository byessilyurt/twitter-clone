import React, { useEffect, useContext } from "react";
import Leftbar from "../components/Leftbar/Leftbar";
import Navigation from "../components/Profile/Navigation";
import Rightbar from "../components/Rightbar/Rightbar";
import Info from "../components/Profile/Info";
import ProfileTabs from "../components/Profile/ProfileTabs";
import { useParams } from "react-router";
import { getUserAndTweets, setProfilePhoto, setCoverPhoto } from "../apiCalls";
import { useState } from "react";
import coverImg from "../assets/profile_pic/cover_img.jpeg";
import burak from "../assets/profile_pic/burak.jpeg";
import "./styles/profile.css";
import EditIcon from "@mui/icons-material/Edit";
import UploadImageToDB from "../components/Profile/UploadImageToDB";
import { AuthContext } from "../context/AuthContext";
function Profile() {
  const [user, setUser] = useState();
  const [tweets, setTweets] = useState();
  const [loading, setLoading] = useState(false);
  const username = useParams().username;
  const currentUser = useContext(AuthContext).user;

  useEffect(() => {
    const requestUserAndTweets = async () => {
      const { resUser, resTweets } = await getUserAndTweets(username);
      console.log(resUser);
      setUser(resUser);
      setTweets(resTweets);
      setLoading(false);
    };
    setLoading(true);
    requestUserAndTweets();
  }, [username]);

  const handleProfileUpload = async (e) => {
    const file = e.target.files[0];
    const res = await setProfilePhoto({ userId: user._id, image: file });
    setUser(res);
  };

  const handleCoverUpload = async (e) => {
    const file = e.target.files[0];
    const res = await setCoverPhoto({ userId: user._id, image: file });
    setUser(res);
  };

  return (
    <>
      <div className="container">
        <div className="left-bar">
          <Leftbar />
        </div>
        {/* {!loading ? ( */}
          <div className="middle">
            <Navigation user={user} tweetCount={tweets?.length} />
            <div className="cover-img"></div>
            <div className="img-wrapper">
              <img src={user?.coverPicture} alt="cover" className="img-cover" />
              <div className="cover-overlay">
                <label htmlFor="hide-cover-upload">
                  <EditIcon color="secondary" />
                </label>
                <input
                  id="hide-cover-upload"
                  type="file"
                  label="Image"
                  name="myFile"
                  accept=".jpeg, .png, .jpg"
                  onChange={(e) => handleCoverUpload(e)}
                />
              </div>
              <img
                src={user?.profilePicture}
                alt="profile"
                className="img-responsive"
              />
              <div className="img-overlay">
                <label htmlFor="hide-profile-upload">
                  <EditIcon className="edit-icon" />
                </label>
                <input
                  id="hide-profile-upload"
                  type="file"
                  label="Image"
                  name="myFile"
                  accept=".jpeg, .png, .jpg"
                  onClick={(e) => console.log("clicked")}
                  onChange={(e) => handleProfileUpload(e)}
                />
              </div>
            </div>
            <div className="user-info">
              <Info user={user} />
            </div>
            <div className="tabs">
              <ProfileTabs user={user} tweets={tweets} loading={loading} />
            </div>
          </div>
        {/* // ) : (
        //   <div class="loader"></div>
        // )} */}
        <div className="right-bar">
          <Rightbar />
        </div>
      </div>
    </>
  );
}

export default Profile;

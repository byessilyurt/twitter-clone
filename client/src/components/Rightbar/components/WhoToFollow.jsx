import { useState, useEffect } from "react";
import "../styles/whotofollow.css";
import profilePic from "../../../assets/profile_pic/my_profile_pic.jpg";
import EdaProfilePic from "../../../assets/profile_pic/eda_profile_pic.jpg";
import MustafaProfilePic from "../../../assets/profile_pic/mustafa_profile_pic.jpg";
import { Typography, Button } from "@mui/material";
import { getAllUsersAndPickThree } from "../../../apiCalls";

function WhoToFollow() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const randomUsers = async() => {
      const res = await getAllUsersAndPickThree()
      setUsers(res)
      return res
    }
    randomUsers()
  }, []);
  return (
    <div className="whotofollow-container">
      <div className="whotofollow-top">
        <div>
          <Typography className="whotofollow-top-title">
            Kimi Takip Etmeli
          </Typography>
        </div>
      </div>
      <div className="whotofollow-users-container">
        {users &&
          users?.map((user) => {
            return (
              <div className="whotofollow-user" key={user?._id}>
                <div className="whotofollow-user-left">
                  <img
                    src={profilePic}
                    alt="whotofollow-user"
                    className="whotofollow-user-img"
                  />
                  <div className="whotofollow-user-info-container">
                    <div>
                      <Typography className="whotofollow-user-usernickname">
                        {user?.nameAndSurname}
                      </Typography>
                    </div>
                    <div>
                      <Typography className="whotofollow-user-username">
                        @{user?.username}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="whotofollow-user-follow-button">
                  <Button variant="contained">Takip Et</Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WhoToFollow;

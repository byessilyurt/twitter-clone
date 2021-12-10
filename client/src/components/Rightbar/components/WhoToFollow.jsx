import "../styles/whotofollow.css";
import profilePic from "../../../assets/profile_pic/my_profile_pic.jpg";
import EdaProfilePic from "../../../assets/profile_pic/eda_profile_pic.jpg";
import MustafaProfilePic from "../../../assets/profile_pic/mustafa_profile_pic.jpg";
import { Typography, Button } from "@mui/material";

function WhoToFollow() {
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
        <div className="whotofollow-user">
          <div className="whotofollow-user-left">
            <img
              src={profilePic}
              alt="whotofollow-user"
              className="whotofollow-user-img"
            />
            <div className="whotofollow-user-info-container">
              <div>
                <Typography className="whotofollow-user-usernickname">
                  Yusuf Yeşilyurt
                </Typography>
              </div>
              <div>
                <Typography className="whotofollow-user-username">
                  @yessilyurt
                </Typography>
              </div>
            </div>
          </div>
          <div className="whotofollow-user-follow-button">
            <Button variant="contained">Takip Et</Button>
          </div>
        </div>
        <div className="whotofollow-user">
          <div className="whotofollow-user-left">
            <img
              src={MustafaProfilePic}
              alt="whotofollow-user"
              className="whotofollow-user-img"
            />
            <div className="whotofollow-user-info-container">
              <div>
                <Typography className="whotofollow-user-usernickname">
                  Mustafa Şamil
                </Typography>
              </div>
              <div>
                <Typography className="whotofollow-user-username">
                  @mustilifa
                </Typography>
              </div>
            </div>
          </div>
          <div className="whotofollow-user-follow-button">
            <Button variant="contained">Takip Et</Button>
          </div>
        </div>
        <div className="whotofollow-user">
          <div className="whotofollow-user-left">
            <img
              src={EdaProfilePic}
              alt="whotofollow-user"
              className="whotofollow-user-img"
            />
            <div className="whotofollow-user-info-container">
              <div>
                <Typography className="whotofollow-user-usernickname">
                  Eda Nur
                </Typography>
              </div>
              <div>
                <Typography className="whotofollow-user-username">
                  @edalissa
                </Typography>
              </div>
            </div>
          </div>
          <div className="whotofollow-user-follow-button">
            <Button variant="contained">Takip Et</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoToFollow;

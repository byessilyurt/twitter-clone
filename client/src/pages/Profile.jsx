import React from "react";
import Leftbar from "../components/Leftbar/Leftbar";
import Rightbar from "../components/Rightbar/Rightbar";

function Profile() {
  return 
  (
    <div>
        <Leftbar />
        <div>
            {user.username} Profile
        </div>
        <Rightbar/>
    </div>

  )
}

export default Profile;

import React from "react";
import Leftbar from "../components/Leftbar/Leftbar";
import Rightbar from "../components/Rightbar/Rightbar";

function Profile() {
  return 
  (
    <div>
        <Leftbar />
        <div>
            {user.username}
        </div>
        <Rightbar/>
    </div>

  )
}

export default Profile;

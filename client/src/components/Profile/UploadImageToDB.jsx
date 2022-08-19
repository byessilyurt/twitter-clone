import React, { useState } from "react";
import axios from "axios";
import { setProfilePhoto, setCoverPhoto } from "../../apiCalls";

export default function ImageUploader() {
  const [postImage, setPostImage] = useState({profilePicture:{image:""}});

  const createPost = async () => {
    try {
      await setProfilePhoto({userId:"61f516240d0b3578c8927a9a",image:"testFromClientviaBase64"});
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage);
  };


  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    //const base64 = await convertToBase64(file);
    //setPostImage({profilePicture:{image:base64}});
  };
      
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      userCredential
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const registerCall = async (userCredential) => {
  try {
    const res = await axios.post(
      "http://localhost:8800/api/auth/register",
      userCredential
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getUserAndTweets = async (username) => {
  try {
    const resUser = await axios.get(
      `http://localhost:8800/api/users/profile/${username}`
    );
    const resTweets = await axios.get(
      `http://localhost:8800/api/tweets/profile/${resUser.data._id}`
    );
    return { resUser: resUser.data, resTweets: resTweets.data };
  } catch (err) {
    return err;
  }
};

export const getAllUsersAndPickThree = async () => {
  try {
    const res = await axios.get("http://localhost:8800/api/users");
    const allUsers = res.data
    const randomUsers = new Array(3)
    for(let i = 0; i < 3; i++) {
      const randomUser = (allUsers[Math.floor(Math.random() * allUsers.length )]);
      if(!randomUsers.includes(randomUser)){
        randomUsers[i] = randomUser
      }else{
        i--
      }
    }
    return randomUsers;
  } catch (err) {
    return err;
  }
};

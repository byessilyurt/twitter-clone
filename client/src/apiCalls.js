import axios from "axios";

const URL = "http://localhost:8800/api";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(URL + "/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const registerCall = async (userCredential) => {
  try {
    const res = await axios.post(URL + "/auth/register", userCredential);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getUserAndTweets = async (username) => {
  try {
    const resUser = await axios.get(URL + `/users/profile/${username}`);
    const resTweets = await axios.get(
      URL + `/tweets/profile/${resUser.data._id}`
    );
    return { resUser: resUser.data, resTweets: resTweets.data };
  } catch (err) {
    return err;
  }
};

export const getAllUsersAndPickThree = async () => {
  try {
    const res = await axios.get(URL + "/users");
    const allUsers = res.data;
    const randomUsers = new Array(3);
    for (let i = 0; i < 3; i++) {
      const randomUser = allUsers[Math.floor(Math.random() * allUsers.length)];
      if (!randomUsers.includes(randomUser)) {
        randomUsers[i] = randomUser;
      } else {
        i--;
      }
    }
    return randomUsers;
  } catch (err) {
    return err;
  }
};

export const getItems = async () => {
  try {
    const res = await axios.get(URL + "/images");
    return res.data;
  } catch (error) {
    return error;
  }
};
export const createItem = async (item) => {
  try {
    const res = await axios.post(URL + "/images", item);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const setProfilePhoto = async (data) => {
  try {
    const res = await axios.put(URL + "/users/profile-photo", {
      userId: data.userId,
      image: data.image,
      headers: { "Content-Type": "text/plain" },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const setCoverPhoto = async (data) => {
  try {
    const res = await axios.put(URL + "/users/cover-photo", data);
    return res.data;
  } catch (error) {
    return error;
  }
};

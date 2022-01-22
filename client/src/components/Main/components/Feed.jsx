import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import Tweet from "./Tweet";

function Feed() {
  const [tweets, setTweets] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    async function getTweets() {
      const response = await axios.get(
        `http://localhost:8800/api/tweets/timeline/${user._id}`
      );
      setTweets(
        response.data.sort((t1, t2) => {
          return new Date(t2.createdAt) - new Date(t1.createdAt);
        })
      );
    }
    getTweets();
  }, [user._id]);

  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} key={tweet._id} />;
      })}
    </div>
  );
}

export default Feed;

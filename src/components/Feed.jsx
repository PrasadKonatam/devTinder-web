import React, { useEffect } from "react";
import baseUrl from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

import axios from "axios";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed.length > 0) return;

    try {
      const res = await axios.get(baseUrl + "/feed", { withCredentials: true });
      dispatch(addFeed(res.data.data || []));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <div>
        {feed.length > 0 ? <UserCard user={feed[0]} /> : <p>Loading...</p>}
      </div>
    )
  );
};

export default Feed;

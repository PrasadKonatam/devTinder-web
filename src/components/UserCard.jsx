import axios from "axios";
import React from "react";
import baseUrl from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, age, gender, about, photoUrl } = user;

  const dispatch = useDispatch();

  const handleSentConnection = async (status, _id) => {
    try {
      const res = await axios.post(
        baseUrl + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(_id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center  text-white m-4">
      <div className="card bg-neutral w-96 h-[540px] shadow-sm flex flex-col justify-between">
        <figure>
          <img
            src={photoUrl || "default-avatar.png"}
            alt="User photo"
            className=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {`${firstName ?? ""} ${lastName ?? ""}`.trim()}
          </h2>
          {age && gender && <p>{`${age}, ${gender}`}</p>}
          <p>{about || "No bio available"}</p>
          <div className="card-actions justify-center m-2">
            <button
              className="btn bg-red-500"
              onClick={() => handleSentConnection("ignore", _id)}
            >
              Ignore
            </button>
            <button
              className="btn bg-green-400"
              onClick={() => handleSentConnection("interest", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

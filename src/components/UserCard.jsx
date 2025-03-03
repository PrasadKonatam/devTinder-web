import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, about, photoUrl } = user;
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
            <button className="btn bg-red-500">Ignore</button>
            <button className="btn bg-green-400">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

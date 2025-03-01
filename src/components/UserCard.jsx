import React from "react";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className="flex justify-center py-6 text-white">
      <div className="card bg-gray-400 w-96 h-[500px] shadow-sm ">
        <figure>
          <img
            src={user?.photoUrl || "default-avatar.png"}
            alt="User photo"
            className=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {`${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim()}
          </h2>
          {user?.age && user?.gender && <p>{`${user.age}, ${user.gender}`}</p>}
          <p>{user?.about || "No bio available"}</p>
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

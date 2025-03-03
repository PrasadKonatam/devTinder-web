import React, { useState } from "react";
import { useDispatch } from "react-redux";
import baseUrl from "../utils/constants";
import { addUser } from "../utils/userSlice";

import axios from "axios";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [photoUrl, setPhotoUrl] = useState(
    user?.photoUrl ||
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUspugOXub65sbxVHOEaD-JEKC8NNWgkWhlg&s"
  );
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const handleSave = async () => {
    try {
      const result = await axios.patch(
        baseUrl + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
          about,
        },
        { withCredentials: true }
      );

      dispatch(addUser(result?.data?.data || []));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (error) {
      setError(error?.response?.data);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="card bg-neutral  w-96 h-[540px] shadow-sm flex flex-col justify-between m-3">
        <div className="card-body">
          <h2 className="card-title justify-center text-white mt-0">
            Edit Profile
          </h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">First Name :</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full h-8 max-w-xs"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">Last Name :</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full h-8 max-w-xs"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">Age :</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full h-8 max-w-xs"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">Gender :</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full h-8 max-w-xs"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">About :</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full h-8 max-w-xs"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">PhotoUrl :</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full  h-8 max-w-xs"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </label>
          </div>
          <p className="text-red-600">{error}</p>
          <div className="card-actions justify-center ">
            <button
              className="bg-blue-500 px-5 py-1 rounded"
              onClick={handleSave}
            >
              save
            </button>
          </div>
        </div>
      </div>
      <div className="m-4">
        <UserCard
          user={{ firstName, lastName, age, gender, about, photoUrl }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;

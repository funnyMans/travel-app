import React from "react";
import NavProfile from "./NavProfile";
import UserImage from "./UserImage.js";
import ProfileItem from "./ProfileItem";

export default function Account() {
  return (
    <div className="accountSet">
      <UserImage />
      <NavProfile />
      <ProfileItem />
    </div>
  );
}

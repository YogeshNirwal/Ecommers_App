import React from "react";
import { NavLink } from "react-router-dom";
import Dashbord from "./../../pages/user/Dashbord";
const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h5>Dashboard</h5>
          <NavLink
            to={"/dashbord/user/profile"}
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to={"/dashbord/user/orders"}
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;

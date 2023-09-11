import React from "react";
import icon from "../../assets/images/Note Logo.svg";
import { NavLink } from "react-router-dom";
const AdminPageMenu = () => {
  return (
    <ul>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>
          <img src={icon} alt="Logo" className="logo" width={"15px"} />
        </li>
      </NavLink>
      <NavLink
        to={"/admin/1"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li className="admin">ادمین</li>
      </NavLink>
      <NavLink
        to={"/admin/users"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li className="users">همه کاربران</li>
      </NavLink>
      <NavLink
        to={"/admin/allCourse"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li className="users">همه دوره ها</li>
      </NavLink>
    </ul>
  );
};

export default AdminPageMenu;

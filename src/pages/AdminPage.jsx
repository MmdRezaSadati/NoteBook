import React ,{ useEffect ,useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../assets/styles/AdminPage.css";
import AdminPageMenu from "../components/Widgets/adminPageMenu";
import axios from "axios";
const AdminPage = () => {
  return (
    <div className="row m-0 py-5 AdminPage" dir="rtl">
      <div className="col-md-2 my-5 h-100">
        <AdminPageMenu/>
      </div>
      <div className="col-md-9 my-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;

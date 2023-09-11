import React, { Fragment, useEffect, useState } from "react";
import Featured from "../Widgets/Featured";
import Popular from "../Widgets/Popular";
import "../../assets/styles/content.css";
import Recently from "../Widgets/Recently";
import Authors from "../Widgets/Authors";
import { Outlet } from "react-router-dom";
const Content = ({ postsData, usersData }) => {
  return (
    <Fragment>
      <Outlet/>
      <div className="content" dir="rtl">
        <div className="have-bg">
          <section className="container p-3">
            <div className="row w-100">
              <Featured postsData={postsData} />
              <Popular postsData={postsData} />
            </div>
          </section>
        </div>
        <section className="container p-3">
          <div className="row w-100">
            <div className="col-md-5">
              <Authors userData={usersData} />
            </div>
            <Recently postsData={postsData} />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Content;

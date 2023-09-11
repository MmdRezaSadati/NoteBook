import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const RecentlyPost = ({ postData }) => {
  return (
    <Fragment>
      <div className="col-lg-5">
        <img src={postData.PostImage} alt="" />
      </div>
      <div className="row col-lg-7">
        <label className="category-lbl">{postData.PostCategory}</label>
        <h3>{postData.PostName}</h3>
        <div className="row">
          <span className="account">
            <img src={postData.AuthorsImage} alt="" />
            {postData.AuthorName}
          </span>
          <span className="numberFont">{postData.startCourse}</span>
          <span>{postData.coursePrice} تومان</span>
        </div>
        <p>{postData.PostDescription}</p>
      </div>
    </Fragment>
  );
};

export default RecentlyPost;

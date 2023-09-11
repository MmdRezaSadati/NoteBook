import React from "react";
import "../../assets/styles/FeaturedPost.css";
import { Link } from "react-router-dom";
const FeaturedPosts = ({ postData }) => {
  return (
    <Link to={"/note/" + postData.id} className="FeaturedPosts col-lg-6">
      <label className="category-lbl">{postData.PostCategory}</label>
      <h3>{postData.PostName}</h3>
      <img src={postData.PostImage} alt="" />
      <div className="row">
        <span className="account">
          <img src={postData.AuthorsImage} alt="" />
          {postData.AuthorName}
        </span>
        <span className="numberFont">{postData.startCourse ? postData.startCourse : "بزودی"}</span>
        <span>{postData.coursePrice } تومان</span>
      </div>
      <p>{postData.PostDescription}</p>
    </Link>
  );
};

export default FeaturedPosts;

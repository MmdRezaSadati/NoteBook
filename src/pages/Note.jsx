import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Note = () => {
  // const urlParam = useParams();
  const [urlParam, setUrlParam] = useState(useParams());
  let [postsData, setPostsData] = useState([]);

  const getPostsData = async () => {
    try {
      let results = await axios.get(
        "https://64f302a7edfa0459f6c63503.mockapi.io/Posts/" + urlParam.id
      );
      try {
        setPostsData(results.data);
        console.log(results.data);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostsData();
  }, []);
  return (
    <div className="coursePage col-lg-12 row my-4" dir="rtl">
      <h2>جزئیات دوره {postsData.PostName}</h2>
      <div className="col-lg-5">
        <img src={postsData.PostImage} />
      </div>
      <div className="row col-lg-7">
        <label className="category-lbl" style={{height:"26px"}}>{postsData.PostCategory}</label>
        <h3>{postsData.PostName}</h3>
        <div className="row">
          <span className="account">
            <img src={postsData.AuthorsImage} alt="" />
            {postsData.AuthorName}
          </span>
          <span className="numberFont">{postsData.startCourse}</span>
          <span>{postsData.coursePrice} تومان</span>
        </div>
        <p>{postsData.PostDescription}</p>
      </div>
    </div>
  );
};

export default Note;

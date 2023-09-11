import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RecentlyPost from "./RecentlyPost";
import "../../assets/styles/allCourse.css";

const AllCourse = () => {
  const Navigate = useNavigate();
  const deletePost = async (urlParam) => {
    console.log(urlParam.id);
    try {
      await axios.delete(
        "https://64f302a7edfa0459f6c63503.mockapi.io/Posts/" + urlParam.id
      );
      try {
        Navigate("/admin/1");
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

  let [postsData, setPostsData] = useState([]);
  const getPostsData = async () => {
    try {
      let results = await axios.get(
        "https://64f302a7edfa0459f6c63503.mockapi.io/Posts"
      );
      try {
        setPostsData(results.data);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>تمام دوره ها</h2>
      <div className="column px-3 allCourse-state">
        {postsData.map((data) => (
          <div className="allCourse-post">
            <i className="bi bi-trash" onClick={() => deletePost(data)}></i>
            <Link
              key={data.id}
              to={"/admin/allCourse/edit/" + data.id}
              className="RecentlyPosts col-lg-12 row my-4 text-end position-relative"
            >
              <RecentlyPost postData={data} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourse;

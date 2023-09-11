import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecentlyPost from "./RecentlyPost";
import '../../assets/styles/allCourse.css';

const AllCourse = () => {
  useEffect(() => {
    getPostsData();
  }, []);

  let [postsData, setPostsData] = useState([]);
  const getPostsData = async () => {
    let results = await axios.get(
      "https://64f302a7edfa0459f6c63503.mockapi.io/Posts"
    );
    setPostsData(results.data);
  };
  return (
    <div>
      <h2>تمام دوره ها</h2>
      <div className="column px-3 allCourse-state">
        {postsData.map((data) => (
          <Link
            key={data.id}
            to={"/admin/allCourse/edit/" + data.id}
            className="RecentlyPosts col-lg-12 row my-4 text-end"
          >
            <RecentlyPost postData={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCourse;

import React from "react";
import RecentlyPost from "./RecentlyPost";
import { Link } from "react-router-dom";

const Recently = ({ postsData }) => {
  return (
    <div className="col-md-7">
      <h2>
        <strong>جدید ترین</strong> دوره ها
      </h2>

      <div className="column px-3 recentlyState">
        {postsData.map((data) => (
          <Link
            to={"/note/" + data.id}
            className="RecentlyPosts col-lg-12 row my-4"
          >
            <RecentlyPost postData={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recently;

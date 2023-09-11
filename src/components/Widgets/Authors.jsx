import React from "react";
import AuthorsPost from "./AuthorsPost";
import "../../assets/styles/Recently.css";
const Authors = ({ userData }) => {
  return (
    <div className="col-md-12">
      <h2>
        <strong>ماهرترین</strong> اساتید
      </h2>

      <div className="column px-3 AuthorsState" key={"AuthorsState"}>
        {userData.map((data) => (
          <AuthorsPost userData={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Authors;

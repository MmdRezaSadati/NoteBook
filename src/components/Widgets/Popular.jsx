import React from "react";
import PopularPost from "./PopularPost";

const Popular = ({postsData}) => {
  return (
    <div className="col-md-5">
      <h2>
        <strong>دوره های</strong> پرطرفدار
      </h2>
      
      <div className="column px-3 PopularState" key={"PopularState2"}>
        {postsData.map((postData)=>(<PopularPost postData={postData} key={postData.id}/>))}
      </div>
    </div>
  );
};

export default Popular;

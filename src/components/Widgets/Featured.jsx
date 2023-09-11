import React , {useState , useEffect , useLayoutEffect} from "react";
import axios from "axios";
import FeaturedPosts from "./FeaturedPosts";

const Featured = ({postsData}) => {
  return (
    <div className="col-md-7">
      <h2>
        <strong>بهترین</strong> های ماه
      </h2>
      <div className="row FeaturedPost-state">
        {postsData.map((postData)=>(<FeaturedPosts postData={postData} key={postData.id}/>))}
      </div>
    </div>
  );
};

export default Featured;

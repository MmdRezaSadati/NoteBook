import React from 'react'
import RecentlyPost from './RecentlyPost'

const Recently = ({postsData}) => {
  return (
    <div className="col-md-7">
      <h2>
        <strong>جدید ترین</strong>  دوره ها
      </h2>
      
      <div className="column px-3" key={"PopularState2"}>
        {postsData.map((data)=>(<RecentlyPost postData={data} />))}
      </div>
    </div>
  )
}

export default Recently
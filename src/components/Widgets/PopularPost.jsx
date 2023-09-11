import React from 'react'
import { Link } from 'react-router-dom'

const PopularPost = ({postData}) => {
  return (
    <Link to={"/note/" + postData.id} className='FeaturedPosts col-lg-6'>
      <label className='category-lbl'>{postData.PostCategory}</label>
      <h4>{postData.PostName}</h4>
      <div className="row">
        <span className='account'><img src={postData.AuthorsImage} alt=''/>{postData.AuthorName}</span>
        <span className='numberFont'>{postData.startCourse}</span>
        <span>{postData.ReadTime} دقیقه</span>
      </div>
      <p>{postData.PostDescription}</p>
    </Link>
  )
}

export default PopularPost
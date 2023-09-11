import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import AccountIcon from "../assets/images/icons/account.png";
import { Fragment } from "react";
import "../assets/styles/Admin.css";
import "../assets/styles/PostNewNoteModal.css";
import "../assets/styles/EditCourse.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const EditNote = () => {
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [urlParam, setUrlParam] = useState(useParams());
  const Navigate = useNavigate();
  let [postData, setPostData] = useState([]);
  const getpostData = async () => {
    const result = await axios.get(
      "https://64f302a7edfa0459f6c63503.mockapi.io/Posts/" + urlParam.id
    );
    console.log(result.data);
    setPostData(result.data);
  };
  useEffect(() => {
    getpostData();
  }, []);

  // submit form and update api
  const submitForm = async (values) => {
    const object = {
      PostName: values.PostName,
      PostImage: imageUrl,
      PostDescription: values.UserBio,
      coursePrice: values.instagramLink,
      AuthorName: "محمدرضا ساداتی",
      AuthorsImage:
        "http://res.cloudinary.com/df9w7u89a/image/upload/v1694343361/ya56v4b67vzezcyymbgz.jpg",
      PostCategory: values.PostCategory,
      startCourse: values.startCourse,
    };
    try {
      await axios.put(
        "https://64f302a7edfa0459f6c63503.mockapi.io/Posts/" + urlParam.id,
        object
      );
      try {
        Navigate("/admin/allCourse");
      } catch (error) {}
    } catch (error) {
      console.log(error);
    }
  };
  // upload avatar in api
  const uploadImage = async () => {
    console.log("clicked");
    const data = new FormData();
    data.append("image", image);
    try {
      const result = await axios.post(
        "https://api.admin.sepehracademy.ir/api/upload/image",
        data
      );
      try {
        setImageUrl(result.data.result);
      } catch (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Formik
      id="edit-course"
      initialValues={{
        PostName: postData.PostName,
        PostDescription: postData.UserBio,
        ReadTime: postData.instagramLink,
        PostImage: postData.TwitterLink,
        PostCategory: postData.FaceBookLink,
      }}
      onSubmit={(values) => submitForm(values)}
    >
      <Form className="row Admin edit-course">
        <h2>ویرایش اطلاعات ادمین</h2>
        <div className="col-md-4 uploadAvatar">
          <label htmlFor="UserAvatar">
            <img
              src={imageUrl ? imageUrl : postData.PostImage ? postData.PostImage : AccountIcon}
              alt="Upload User Avatar"
            />
            <div className="cameraIcon">
              <i className="bi bi-camera"></i>
            </div>
          </label>
          <button type="button" onClick={uploadImage}>
            Upload Avatar
          </button>
          <Field
            name="UserAvatar"
            id="UserAvatar"
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="col-md-8 field-wrapper">
          <div className="form-item text-end">
            <label htmlFor="">نام دوره</label>
            <Field
              name="PostName"
              as="textarea"
              placeholder="نام دوره :"
              defaultValue={postData.PostName}
            />
          </div>
          <div className="form-item text-end">
            <label htmlFor="">قیمت دوره </label>
            <Field
              name="coursePrice"
              as="textarea"
              placeholder="قیمت دوره :"
              defaultValue={postData.coursePrice}
            />
          </div>
          <div className="form-item text-end">
            <label htmlFor="">توضیحات دوره </label>
            <Field
              name="PostDescription"
              as="textarea"
              placeholder="توضیحات دوره :"
              defaultValue={postData.PostDescription}
            />
          </div>
          <div className="form-item text-end">
            <label htmlFor="">زمان شروع دوره </label>
            <Field
              name="startCourse"
              as="textarea"
              placeholder="زمان شروع دوره : YYYY,MM,DD"
              defaultValue={postData.startCourse}
            />
          </div>
          <div className="form-item text-end">
            <label htmlFor="">دسته بندی</label>
            <Field
              name="PostCategory"
              as="textarea"
              placeholder=" دسته بندی دوره را وارد کنید ..."
              defaultValue={postData.PostCategory}
            />
          </div>
        </div>
        <input type="submit" />
      </Form>
    </Formik>
  );
};

export default EditNote;

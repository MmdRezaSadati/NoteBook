import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import AccountIcon from "../assets/images/icons/account.png";
import { Fragment } from "react";
import "../assets/styles/Admin.css";
import "../assets/styles/PostNewNoteModal.css";
import "../assets/styles/EditCourse.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../components/Widgets/Input";
import Textarea from "../components/Widgets/Textarea";
const EditNote = () => {
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [urlParam, setUrlParam] = useState(useParams());
  const Navigate = useNavigate();
  let [postData, setPostData] = useState([]);
  const getpostData = async () => {
    try {
      const result = await axios.get(
        "https://64f302a7edfa0459f6c63503.mockapi.io/Posts/" + urlParam.id
      );
      try {
        setPostData(result.data);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }

    // console.log(result.data);
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
    const alertMes = toast.info("... اطلاعات دوره آپدیت شد لطفا صبر کنید", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    alertMes;
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
        <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        <h2>ویرایش اطلاعات ادمین</h2>
        <div className="col-md-4 uploadAvatar">
          <label htmlFor="UserAvatar">
            <img
              src={
                imageUrl
                  ? imageUrl
                  : postData.PostImage
                  ? postData.PostImage
                  : AccountIcon
              }
              alt="Upload User Avatar"
            />
            <div className="cameraIcon">
              <i className="bi bi-camera"></i>
            </div>
          </label>
          <button type="button" onClick={uploadImage}>
            Upload Course Image
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
          <Textarea
            addClass={"text-end"}
            name={"PostName"}
            placeholder={"نام دوره"}
            type={"textarea"}
            defaultValue={postData.PostName}
            label={"توضیحات دوره :"}
          />
          <Textarea
            addClass={"text-end"}
            name={"coursePrice"}
            placeholder={"قیمت دوره"}
            type={"textarea"}
            defaultValue={postData.coursePrice}
            label={"قیمت دوره :"}
          />
          <Textarea
            addClass={"text-end"}
            name={"PostDescription"}
            placeholder={"توضیحات دوره"}
            type={"textarea"}
            defaultValue={postData.PostDescription}
            label={"توضیحات دوره :"}
          />
          <Textarea
            addClass={"text-end"}
            name={"startCourse"}
            placeholder={"زمان شروع دوره "}
            type={"textarea"}
            defaultValue={postData.startCourse}
            label={"زمان شروع دوره : YYYY,MM,DD"}
          />
          <Textarea
            addClass={"text-end"}
            name={"PostCategory"}
            placeholder={"دسته بندی "}
            type={"textarea"}
            defaultValue={postData.PostCategory}
            label={" دسته بندی دوره را وارد کنید ..."}
          />
        </div>
        <input type="submit" />
      </Form>
    </Formik>
  );
};

export default EditNote;

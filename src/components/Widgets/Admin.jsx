import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import AccountIcon from "../../assets/images/icons/account.png";
import { Fragment } from "react";
import "../../assets/styles/Admin.css";
import "../../assets/styles/PostNewNoteModal.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "./Input";
import Textarea from "./Textarea";
const Admin = () => {
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [urlParam, setUrlParam] = useState(useParams());
  const Navigate = useNavigate();
  let [usersData, setUsersData] = useState([]);
  const getUsersData = async () => {
    try {
      const result = await axios.get(
        "https://64f302a7edfa0459f6c63503.mockapi.io/Users/" + urlParam.id
      );
      try {
        setUsersData(result.data);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsersData();
  }, []);

  // submit form and update api
  const submitForm = async (values) => {
    const object = {
      UserName: values.UserName,
      UserAvatar: imageUrl,
      UserBio: values.UserBio,
      instagramLink: values.instagramLink,
      TwitterLink: values.TwitterLink,
      FaceBookLink: values.FaceBookLink,
    };
    const alertMes = toast.info("... اطلاعات کاربر آپدیت شد لطفا صبر کنید", {
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
        "https://64f302a7edfa0459f6c63503.mockapi.io//Users/" + urlParam.id,
        object
      );
      try {
        Navigate("/admin/users");
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
      id="edit-Admin"
      initialValues={{
        UserName: usersData.UserName,
        UserAvatar: "",
        UserBio: usersData.UserBio,
        instagramLink: usersData.instagramLink,
        TwitterLink: usersData.TwitterLink,
        FaceBookLink: usersData.FaceBookLink,
      }}
      enableReinitialize={true}
      onSubmit={(values) => submitForm(values)}
    >
      <Form className="row Admin">
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
                  : usersData.UserAvatar
                  ? usersData.UserAvatar
                  : AccountIcon
              }
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
          <Textarea
            addClass={" text-end"}
            name={"UserName"}
            placeholder={"نام کاربری خود را وارد کنید ..."}
            type={"textarea"}
            label={"نام کاربری"}
          />
          <Textarea
            addClass={" text-end"}
            name={"UserBio"}
            placeholder={" بیوگرافی کوتاهی از خود وارد کنید ..."}
            type={"textarea"}
            label={"بیوگرافی"}
          />
          <Textarea
            addClass={" text-end"}
            name={"instagramLink"}
            placeholder={"لینک اینستاگرام خود را وارد کنید ..."}
            type={"textarea"}
            label={"لینک اینستاگرام"}
          />
          <Textarea
            addClass={" text-end"}
            name={"TwitterLink"}
            placeholder={"لینک توئیتر خود را وارد کنید ..."}
            type={"textarea"}
            label={"لینک توئیتر"}
          />
          <Textarea
            addClass={" text-end"}
            name={"FaceBookLink"}
            placeholder={"لینک فیسبوک خود را وارد کنید ..."}
            type={"textarea"}
            label={"لینک فیسبوک"}
          />
        </div>
        <input type="submit" />
      </Form>
    </Formik>
  );
};

export default Admin;

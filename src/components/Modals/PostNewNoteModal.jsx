import React, { Fragment, useState } from "react";
import "../../assets/styles/PostNewNoteModal.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import uploadIcon from "../../assets/images/UploadImage.svg";
import axios from "axios";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
const PostNewNoteModal = () => {
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const submitForm = async (values) => {
    const check = document.querySelector(".PostNewNoteModal > a");
    const object = {
      PostName: values.PostName,
      PostDescription: values.PostDescription,
      coursePrice: values.coursePrice,
      PostImage: imageUrl,
      AuthorName: "محمدرضا ساداتی",
      AuthorsImage:
        "http://res.cloudinary.com/df9w7u89a/image/upload/v1694343361/ya56v4b67vzezcyymbgz.jpg",
      PostCategory: values.PostCategory,
      startCourse: values.startCourse,
    };
    console.log(object.PostImage);
    toast.success("... دوره جدید افزوده شد لطفا منتظر بمانید", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    try {
      await axios.post(
        "https://64f302a7edfa0459f6c63503.mockapi.io/Posts",
        object
      );
      try {
        setPostsData([...postsData, object]);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
    check.click();
  };
  // const [imageUploaderInputValue, setImageUploaderInputValue] = useState()
  const uploadImage = async () => {
    let waitMesUploadImage = document.getElementById("waitMesUploadImage");
    let PostNewNoteForm = document.querySelector(".new-post-form");
    waitMesUploadImage.style.display = "block";
    const data = new FormData();
    data.append("image", image);
    if (!image) {
      waitMesUploadImage.innerHTML = "please Upload a new image";
    } else {
      waitMesUploadImage.innerHTML = "pleas wait , image is Uploading...";
      try {
        const result = await axios.post(
          "https://api.admin.sepehracademy.ir/api/upload/image",
          data
        );
        try {
          setImageUrl(result.data.result);
          try {
            waitMesUploadImage.style.display = "none";
          } catch (error) {
            console.log(error.message);
          }
        } catch (error) {
          console.log(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  // create validation for form submission
  const validation = yup.object().shape({
    PostName: yup.string().required("Post Name is required bro!!"),
    PostDescription: yup
      .string()
      .required("Post Description is required bro!!"),
    coursePrice: yup.number().required("course Price is required bro!!"),
    PostCategory: yup.string().required("Post Category is required bro!!"),
    startCourse: yup.string().required("start Course is required bro!!"),
  });

  return (
    <Fragment>
      <div className="Modal" dir="rtl">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />

        <Link className="Modal-bg" to={"/"}></Link>
        <div className="PostNewNoteModal">
          <Link to="/">
            <i className="bi bi-x-circle"></i>
          </Link>
          <div className="row">
            <Formik
              id="PostNewNoteForm"
              initialValues={{
                PostName: "",
                PostDescription: "",
                ReadTime: "",
                PostImage: "",
                AuthorName: "",
                PostCategory: "",
              }}
              onSubmit={(values) => submitForm(values)}
              validationSchema={validation}
            >
              <Form className="new-post-form">
                <div className="form-item half-item">
                  <Field name="PostName" placeholder="نام دوره :" />
                  <ErrorMessage
                    name="PostName"
                    className="error"
                    component={"span"}
                  />
                </div>
                <div className="form-item half-item">
                  <Field
                    name="coursePrice"
                    placeholder="قیمت دوره :"
                    type="number"
                  />
                  <ErrorMessage
                    name="coursePrice"
                    className="error"
                    component={"span"}
                  />
                </div>
                <div className="form-item">
                  <Field
                    name="PostDescription"
                    as="textarea"
                    // style={{width: "100%"}}
                    placeholder="توضیحات دوره :"
                  />
                  <ErrorMessage
                    name="PostDescription"
                    className="error"
                    component={"span"}
                  />
                </div>
                <div className="form-item">
                  <label
                    htmlFor="imageUploaderInput"
                    className="text-center column"
                  >
                    <img
                      className="d-block"
                      src={imageUrl ? imageUrl : uploadIcon}
                      width={200}
                      alt="pleas choose file"
                    />
                    <p id="waitMesUploadImage" style={{ display: "none" }}>
                      pleas wait , image is Uploading...
                    </p>
                    <button type="button" onClick={uploadImage}>
                      Upload image
                    </button>
                  </label>
                  <Field
                    id="imageUploaderInput"
                    name="postImage"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      waitMesUploadImage.style.display = "none";
                      setImage(e.target.files[0]);
                    }}
                  />
                  <ErrorMessage
                    name="postImage"
                    className="error"
                    component={"span"}
                  />
                </div>
                <div className="form-item half-item">
                  <Field
                    name="startCourse"
                    placeholder="زمان شروع دوره : YYYY,MM,DD"
                  />
                  <ErrorMessage
                    name="startCourse"
                    className="error"
                    component={"span"}
                  />
                </div>
                <div className="form-item half-item">
                  <Field name="PostCategory" placeholder="دسته بندی دوره :" />
                  <ErrorMessage
                    name="PostCategory"
                    className="error"
                    component={"span"}
                  />
                </div>

                <input type="submit" value="شروع دوره جدید !" />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PostNewNoteModal;

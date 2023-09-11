import { Fragment, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/toggles.css";
import "./assets/styles/dark theme.css";
import "./assets/styles/fonts.css";
import axios from "axios";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import PostNewNoteModal from "./components/Modals/PostNewNoteModal";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Error404 from "./pages/Error404";
import Note from "./pages/Note";
import EditNote from "./pages/EditNote";
import AdminPage from "./pages/AdminPage";
import Users from "./components/Widgets/users";
import AllCourse from "./components/Widgets/AllCourse";
import Admin from "./components/Widgets/Admin";
function App() {
  let [postsData, setPostsData] = useState([]);
  let [usersData, setUsersData] = useState([]);
  const getPostsData = async () => {
    let results = await axios.get(
      "https://64f302a7edfa0459f6c63503.mockapi.io/Posts"
    );
    setPostsData(results.data);
  };
  const getUsersData = async () => {
    const result = await axios.get(
      "https://64f302a7edfa0459f6c63503.mockapi.io/Users"
    );
    setUsersData(result.data);
  };
  useEffect(() => {
    getPostsData();
    getUsersData();
  }, []);
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Content postsData={postsData} usersData={usersData} />,
          children: [
            {
              path: "/addNewNote",
              element: <PostNewNoteModal />,
            },
          ],
        },
        {
          path: "/note/",
          element: <Note />,
          children: [
            {
              path: "/note/:id",
              element: <Note />,
            },
          ],
        },
      ],
    },
    {
      path: "/admin/",
      element: <AdminPage />,
      children: [
        {
          path: "/admin/",
          children: [{ path: "/admin/:id", element: <Admin /> }],
        },
        {
          path: "/admin/users",
          element: <Users />,
        },
        {
          path: "/admin/allCourse/",
          element: <AllCourse />,
        },
        { path: "/admin/allCourse/edit/:id", element: <EditNote /> },
      ],
    },
    { path: "*", element: <Error404 /> },
  ]);
  return (
    <div className="AppBody irsansFont">
      <RouterProvider router={Router} />
      {/* <PostNewNoteModal submitForm={submitForm} />
      <Header />
      <Content postsData={postsData} usersData={usersData} /> */}
    </div>
  );
}

export default App;

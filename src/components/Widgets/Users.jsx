import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../assets/styles/AllUsers.css";
import AuthorsPost from "./AuthorsPost";
import { Link } from "react-router-dom";
const Users = () => {
  let [usersData, setUsersData] = useState([]);

  const getUsersData = async () => {
    const result = await axios.get(
      "https://64f302a7edfa0459f6c63503.mockapi.io/Users/"
    );
    setUsersData(result.data);
  };
  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div>
      <h2>همه کاربران</h2>
      <div className="User-wrapper row justify-content-center">
        {usersData.map((user) => (
          <Link to={"/admin/" + user.id} key={user.id}>
            {" "}
            <AuthorsPost userData={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;

import axios from "axios";
import React ,{ useEffect ,useState } from "react";
import '../../assets/styles/AllUsers.css';
const Users = () => {
  let [usersData, setUsersData] = useState([]);

  const getUsersData = async () => {
    const result = await axios.get(
      "https://64f302a7edfa0459f6c63503.mockapi.io/Users/1"
    );
    setUsersData(result.data);
  };
  useEffect(() => {
    getUsersData();  
  }, [])
  
  return (
    <div>Users</div>
  )
}

export default Users

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListUser() {
  
  const [ListUser, setListUser] = useState([]);

  const handleSubmit = (userName) => {
    // Gửi yêu cầu POST đến API để thêm người dùng
    fetch(`http://localhost:8080/api/delete-user/${userName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        axios
          .get("http://localhost:8080/api/list-user")
          .then(function (response) {
            // handle success
            setListUser(response.data.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
        alert(`Người dùng đã được xóa`);
      })
      .catch((error) => {
        alert("Lỗi khi xóa người dùng:", error);
        // Xử lý các hành động khi có lỗi xảy ra
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/list-user")
      .then(function (response) {
        // handle success
        setListUser(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>LIST USER</h1>
      <table className="table">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Fullname</th>
          <th scope="col">Address</th>
          <th scope="col">Sex</th>
          <th scope="col">Email</th>
          <th scope="col">Sửa</th>
          <th scope="col">Xóa</th>
        </tr>
      </thead>
      <tbody>
        {ListUser.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.fullname}</td>
              <td>{user.address}</td>
              <td>{user.sex == 1 ? "Nam" : "Nữ"}</td>
              <td>{user.email}</td>
              <td>
                <Link className="Edit" to={`/update-user/${user.username}`}>Sửa</Link>
              </td>
              <td>
                <div className="Delete" onClick={() => handleSubmit(user.username)}>Xóa</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    
  );
}

export default ListUser;

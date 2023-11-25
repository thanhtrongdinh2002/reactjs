import axios from "axios";
import { useEffect, useState } from "react";
function ListUser() {
  const [ListUser, setListUser] = useState();
  useEffect(() => {
    axios.get("http://localhost:8080/api/list-user")
      .then(function (response) {
        // handle success
        setListUser(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  console.log(ListUser)
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Fullname</th>
          <th scope="col">Address</th>
          <th scope="col">Sex</th>
          <th scope="col">Email</th>
          <th scope="col">Chi tiết</th>
          <th scope="col">Sửa</th>
          <th scope="col">Xóa</th>
        </tr>
      </thead>
      <tbody>
        {ListUser.map((user, index) => {
          return (
            <tr>
              <td>{user.username}</td>
              <td>dinh thanh trong</td>
              <td>can tho</td>
              <td>Nam</td>
              <td>dttrong@gmail.com</td>

              <td>
                <a href="/detail-user/<%= users[i].username %>">chi tiet</a>
              </td>
              <td>
                <a href="/edit-user/<%= users[i].username %>">Sua</a>
              </td>
              <td>
                <a href="/delete-user/<%= users[i].username %>">Xoa</a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListUser;

import axios from "axios";
import { useEffect, useState } from "react";
function ListCategory() {
  const [ListCategory, setListCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/list-category")
      .then(function (response) {
        // handle success
        setListCategory(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <table class="table">
        <thead>
            <tr>
                
                <th scope="col">Tên danh mục</th>
                <th scope="col">Sửa</th>
                <th scope="col">Xóa</th>
            </tr>
        </thead>
        <tbody>
        {ListCategory.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.tendanhmuc}</td>
              <td>
                <a href="/api/edit-user/<%= users[i].username %>">Sua</a>
              </td>
              <td>
                <a href="/api/delete-user/<%= users[i].username %>">Xoa</a>
              </td>
            </tr>
          );
        })}
        </tbody>
    </table>
  );
}
export default ListCategory;
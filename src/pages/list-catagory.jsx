import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function ListCategory() {
  const [ListCategory, setListCategory] = useState([]);
  const handleSubmit = (iddm) => {
    // Gửi yêu cầu POST đến API để thêm người dùng
    fetch(`http://localhost:8080/api/delete-category/${iddm}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
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
        alert(`Danh mục đã được xóa`);
      })
      .catch((error) => {
        alert("Lỗi khi xóa danh mục:", error);
        // Xử lý các hành động khi có lỗi xảy ra
      });
  };
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
    <div>
      <h1>LIST CATEGOTY</h1>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">Tên danh mục</th>
          <th scope="col">Sửa</th>
        </tr>
      </thead>
      <tbody>
        {ListCategory.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.tendanhmuc}</td>
              <td>
                <Link className="Edit" to={`/update-category/${user.iddanhmuc}`}>Sửa</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}
export default ListCategory;

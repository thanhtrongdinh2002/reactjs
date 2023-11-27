import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ListProduct() {
  const [ListProduct, setListProduct] = useState([]);
  const handleSubmit = (idsp) => {
    // Gửi yêu cầu POST đến API để thêm người dùng
    fetch(`http://localhost:8080/api/delete-product/${idsp}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        axios
          .get("http://localhost:8080/api/list-product")
          .then(function (response) {
            // handle success
            setListProduct(response.data.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
        alert(`Sản phẩm đã được xóa`);
      })
      .catch((error) => {
        alert("Lỗi khi xóa sản phẩm:", error);
        // Xử lý các hành động khi có lỗi xảy ra
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/list-product")
      .then(function (response) {
        // handle success
        setListProduct(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>LIST PRODUCT</h1>
      <table className="table">
      <thead>
        <tr>
          <th scope="col">Product Name</th>
          <th scope="col">Product Price</th>
          <th scope="col">Detail</th>
          <th scope="col">Prodcut Image</th>
          <th scope="col">Product Type</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {ListProduct.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.tensp}</td>
              <td>{user.giasp}</td>
              <td>{user.chitietsp}</td>
              <td>{user.hinhanh}</td>
              <td>{user.iddanhmuc}</td>
              <td>
                <Link className="Edit" to={`/update-product/${user.idsp}`}>Sửa</Link>
              </td>
              <td>
              <div className="Delete" onClick={() => handleSubmit(user.idsp)}>Xóa</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default ListProduct;

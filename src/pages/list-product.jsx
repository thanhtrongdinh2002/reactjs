import axios from "axios";
import { useEffect, useState } from "react";
function ListProduct() {
  const [ListProduct, setListProduct] = useState([]);
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
    <table className="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product Price</th>
          <th scope="col">Product Type</th>
          <th scope="col">Detail</th>
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
              <td>{user.hinhanh}</td>
              <td>{user.chitietsp}</td>

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

export default ListProduct;

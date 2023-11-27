import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import FormData from "form-data";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { idsp } = useParams();
  const [tensp, setTensp] = useState("");
  const [giasp, setGiasp] = useState("");
  const [chitietsp, setChitietsp] = useState("");
  const [iddanhmuc, setIddanhmuc] = useState("");
  const [hinhanh, setHinhanh] = useState(null);

  const [ListCategory, setListCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/list-category")
      .then(function (response) {
        setListCategory(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Tạo một đối tượng FormData
    const formData = new FormData();
    formData.append("tensp", tensp);
    formData.append("giasp", giasp);
    formData.append("chitietsp", chitietsp);
    formData.append("iddanhmuc", iddanhmuc);
    formData.append("hinhanh", hinhanh);

    // Gửi yêu cầu POST đến API để thêm sản phẩm
    axios
      .post(`http://localhost:8080/api/update-product/${idsp}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        alert("Sản phẩm đã được thêm");
        // Xử lý các hành động sau khi thêm sản phẩm thành công
      })
      .catch(function (error) {
        alert("Lỗi khi thêm sản phẩm");
        // Xử lý các hành động khi có lỗi xảy ra
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên sản phẩm</label>
        <input
          type="text"
          onChange={(e) => {
            setTensp(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Chi tiết</label>
        <input
          type="text"
          onChange={(e) => {
            setChitietsp(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Giá</label>
        <input
          type="number"
          onChange={(e) => {
            setGiasp(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Hình ảnh</label>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            setHinhanh(file);
          }}
        />
      </div>
      <div>
        <select
          onChange={(e) => {
            setIddanhmuc(e.target.value);
          }}
        >
          {ListCategory.map((item) => (
            <option value={item.iddanhmuc}>
              {item.tendanhmuc}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditProduct;

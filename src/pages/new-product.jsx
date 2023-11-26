import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function NewProduct() {
  const [tensp, setTensp] = useState("");
  const [giasp, setGiasp] = useState("");
  const [chitietsp, setChitietsp] = useState("");
  const [iddanhmuc, setIddanhmuc] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Tạo một object chứa thông tin người dùng
    const newUser = {
      tensp: tensp,
      giasp: giasp,
      chitietsp: chitietsp,
      iddanhmuc: iddanhmuc,
    };

    // Gửi yêu cầu POST đến API để thêm người dùng
    fetch("http://localhost:8080/api/create-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Sản phẩm đã được thêm")
        // Xử lý các hành động sau khi thêm người dùng thành công
      })
      .catch((error) => {
        alert("Lỗi khi thêm sản phẩm")
        // Xử lý các hành động khi có lỗi xảy ra
      });
    }
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
          {ListCategory.map((item) => (
            <div className="form-check">
              <label>{item.tendanhmuc}</label>
              <input
                type="radio"
                value={item.iddanhmuc}
                onChange={(e) => {
                  setIddanhmuc(e.target.value);
                
                }}
              />
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };

export default NewProduct;

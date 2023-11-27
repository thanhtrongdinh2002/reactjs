import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const { username } = useParams();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // Tạo một object chứa thông tin người dùng
    const newUser = {
      fullname: fullname,
      address: address,
      sex: sex,
      email: email,
    };
    // Gửi yêu cầu POST đến API để thêm người dùng
    fetch(`http://localhost:8080/api/update-user/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Người dùng đã được thêm`);
        // Xử lý các hành động sau khi thêm người dùng thành công
      })
      .catch((error) => {
        alert("Lỗi khi thêm người dùng:", error);
        // Xử lý các hành động khi có lỗi xảy ra
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Full Name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <label>Sex</label>
      <select
        onChange={(e) => {
          setSex(e.target.value);
        }}
      >
        <option selected>Chọn</option>
        <option value="1">Nam</option>
        <option value="0">Nữ</option>
      </select>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Address
        </label>
        <input
          type="text"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default EditUser;

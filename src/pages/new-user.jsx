import React, { useState } from "react";

function NewUser() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // Tạo một object chứa thông tin người dùng
    const newUser = {
      username: username,
      password: password,
      fullname: fullname,
      address: address,
      sex: sex,
      email: email,
    };
    console.log(newUser);
    // Gửi yêu cầu POST đến API để thêm người dùng
    fetch("http://localhost:8080/api/create-user", {
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
          User Name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
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
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="sex"
          onChange={(e) => {
            setSex(e.target.value);
          }}
          value="1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Nam
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="sex"
          onChange={(e) => {
            setSex(e.target.value);
          }}
          value="2"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Nữ
        </label>
      </div>
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

export default NewUser;

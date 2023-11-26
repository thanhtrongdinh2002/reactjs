import { useState } from "react";

function NewCategory() {
  const [tendanhmuc, setTendanhmuc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Tạo một object chứa thông tin người dùng
    const newUser = {
      tendanhmuc: tendanhmuc,
      
    };

    // Gửi yêu cầu POST đến API để thêm người dùng
    fetch("http://localhost:8080/api/create-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Danh mục đã được thêm");
        // Xử lý các hành động sau khi thêm người dùng thành công
      })
      .catch((error) => {
        alert("Lỗi khi thêm danh mục", error);
        // Xử lý các hành động khi có lỗi xảy ra
      });
    }
  return (
    <>
      <h1>Them danh muc</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên danh muc</label>
          <input
            type="text"
            onChange={(e) => {
              setTendanhmuc(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NewCategory;

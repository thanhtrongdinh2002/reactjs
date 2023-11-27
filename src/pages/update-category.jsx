import { useState } from "react";
import { useParams } from "react-router-dom";

function EditCategory() {
    const { iddm } = useParams();
  const [tendanhmuc, setTendanhmuc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Tạo một object chứa thông tin người dùng
    const newUser = {
      tendanhmuc: tendanhmuc,
      
    };

    // Gửi yêu cầu POST đến API để thêm người dùng
    fetch(`http://localhost:8080/api/update-category/${iddm}`, {
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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên danh mục</label>
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

export default EditCategory;

import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Gửi yêu cầu đăng nhập đến API endpoint
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const status = data.status;

        if (status === "Đăng nhập thất bại") {
          setErrorMessage("Tên đăng nhập không tồn tại");
        } else if (status === "Sai mật khẩu") {
          setErrorMessage("Sai mật khẩu");
        } else if (status === "Đăng nhập thành công") {
          // Đăng nhập thành công
          alert("Đăng nhập thành công!");
          setErrorMessage("");
        }
      } else {
        // Xử lý lỗi từ API endpoint
        setErrorMessage("Đã xảy ra lỗi");
      }
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
      setErrorMessage("Đã xảy ra lỗi");
    }
  };

  return (
    <div className="login-page">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Tên đăng nhập:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default LoginPage;

// JavaScript code
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const username = inputUsername.value;
  const password = inputPassword.value;

  if (username === "" || password === "") {
    alert("Vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.username === username && user.password === password) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "index.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});

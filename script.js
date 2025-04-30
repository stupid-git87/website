// Menu toggle
function openMenu() {
    document.getElementById("sidebar").style.left = "0";
    const menuBtn = document.querySelector(".menu-btn");
    if (menuBtn) menuBtn.style.display = "none";
  }
  
  function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px";
    const menuBtn = document.querySelector(".menu-btn");
    if (menuBtn) menuBtn.style.display = "block";
  }
  
  // Modal & Forms
  const loginModal = document.getElementById("loginModal");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const loginMessage = document.getElementById("loginMessage");
  const registerMessage = document.getElementById("registerMessage");
  const loginFormContainer = document.getElementById("loginFormContainer");
  const registerFormContainer = document.getElementById("registerFormContainer");
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");
  
  // Show login modal
  function openLoginModal() {
    resetForms();
    loginModal.style.display = "block";
    loginModal.setAttribute("aria-hidden", "false");
    setActiveTab(loginTab);
    loginForm.querySelector("input").focus();
  }
  
  // Show register modal
  function openRegisterForm() {
    resetForms();
    loginModal.style.display = "block";
    loginModal.setAttribute("aria-hidden", "false");
    setActiveTab(registerTab);
    registerForm.querySelector("input").focus();
  }
  
  // Close modal
  function closeLoginModal() {
    loginModal.style.display = "none";
    loginModal.setAttribute("aria-hidden", "true");
  }
  
  // Reset forms
  function resetForms() {
    loginForm.reset();
    registerForm.reset();
    loginMessage.textContent = "";
    registerMessage.textContent = "";
  }
  
  // Set tab active
  function setActiveTab(activeTab) {
    const isLogin = activeTab === loginTab;
  
    loginTab.classList.toggle("active", isLogin);
    registerTab.classList.toggle("active", !isLogin);
  
    loginTab.setAttribute("aria-selected", isLogin);
    loginTab.setAttribute("tabindex", isLogin ? "0" : "-1");
  
    registerTab.setAttribute("aria-selected", !isLogin);
    registerTab.setAttribute("tabindex", !isLogin ? "0" : "-1");
  
    loginFormContainer.style.display = isLogin ? "block" : "none";
    registerFormContainer.style.display = isLogin ? "none" : "block";
  }
  
  // Handle form submit - login
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const { username, password } = loginForm;
  
    if (!username.value.trim() || !password.value.trim()) {
      loginMessage.textContent = "Vui lòng nhập tên đăng nhập và mật khẩu.";
      loginMessage.style.color = "red";
      return;
    }
  
    if (username.value === "admin" && password.value === "password") {
      loginMessage.textContent = "Đăng nhập thành công!";
      loginMessage.style.color = "green";
      setTimeout(() => {
        closeLoginModal();
        loginMessage.textContent = "";
      }, 1500);
    } else {
      loginMessage.textContent = "Tên đăng nhập hoặc mật khẩu không đúng.";
      loginMessage.style.color = "red";
    }
  });
  
  // Handle form submit - register
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const { regFullName, regEmail, regPassword, regConfirmPassword } =
      registerForm;
  
    if (
      ![regFullName, regEmail, regPassword, regConfirmPassword].every((input) =>
        input.value.trim()
      )
    ) {
      registerMessage.textContent = "Vui lòng điền đầy đủ thông tin.";
      registerMessage.style.color = "red";
      return;
    }
  
    if (regPassword.value !== regConfirmPassword.value) {
      registerMessage.textContent = "Mật khẩu xác nhận không khớp.";
      registerMessage.style.color = "red";
      return;
    }
  
    registerMessage.textContent =
      "Đăng ký thành công! Bạn có thể đăng nhập ngay.";
    registerMessage.style.color = "green";
    setTimeout(() => {
      registerMessage.textContent = "";
      openLoginModal();
    }, 2000);
  });
  
  // Tab event
  loginTab.addEventListener("click", () => {
    setActiveTab(loginTab);
    loginForm.querySelector("input").focus();
  });
  
  registerTab.addEventListener("click", () => {
    setActiveTab(registerTab);
    registerForm.querySelector("input").focus();
  });
  
  // Close modal on cancel or outside click
  ["closeLogin", "cancelLogin", "cancelRegister"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", closeLoginModal);
  });
  
  window.addEventListener("click", (event) => {
    if (event.target === loginModal) closeLoginModal();
  });
  
  // Open modal via button or link
  const openLoginBtn = document.getElementById("openLoginBtn");
  if (openLoginBtn) {
    openLoginBtn.addEventListener("click", openLoginModal);
  }
  
  document.querySelectorAll("a").forEach((link) => {
    const text = link.textContent.trim().toUpperCase();
    if (text === "LOGIN") {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        openLoginModal();
      });
    } else if (text === "TRANG CHỦ") {
      link.addEventListener("click", closeLoginModal);
    }
  });
  window.addEventListener("scroll", function () {
    const messageBox = document.getElementById("messageContainer");
    if (window.scrollY <= 10) {
      messageBox.style.display = "block";
    } else {
      messageBox.style.display = "none";
    }
  });
  
  window.addEventListener("DOMContentLoaded", () => {
    if (window.scrollY <= 10) {
      messageBox.style.display = "block";
    }
  });
  
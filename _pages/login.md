---
layout: page
title: 로그인
permalink: /login/
---

<div id="auth-section">
  <button id="login-btn">🔐 Google 로그인</button>

  <div id="user-info" style="display:none;">
    <p><span id="user-email"></span> 님, 환영합니다!</p>
    <button id="logout-btn">🚪 로그아웃</button>
  </div>
</div>

<!-- Firebase SDKs: CDN + compat 버전 -->
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-auth-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyDXB4ilHCdpWzc93i_ZuXy28XF0WD5sRmw",
    authDomain: "csi500.firebaseapp.com",
    databaseURL: "https://csi500-default-rtdb.firebaseio.com",
    projectId: "csi500",
    storageBucket: "csi500.firebasestorage.app",
    messagingSenderId: "156115395881",
    appId: "1:156115395881:web:9b02926e36e8cec3564338",
    measurementId: "G-M76XFGXLWD"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  function showUser(email) {
    const emailSpan = document.getElementById("user-email");
    if (!emailSpan) {
      console.warn("⚠️ user-email 엘리먼트를 찾을 수 없음");
      return;
    }

    emailSpan.innerText = email;
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("user-info").style.display = "block";
  }

  function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        if (!user || !user.email) {
          alert("❌ 로그인 실패 또는 이메일 없음");
          return;
        }

        const email = user.email;
        localStorage.setItem("user", JSON.stringify({
          uid: user.uid,
          email
        }));
        showUser(email);
      })
      .catch((error) => {
        alert("❌ 로그인 오류: " + error.message);
        console.error(error);
      });
  }

  function signOut() {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      location.reload();
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");

    if (loginBtn) loginBtn.addEventListener("click", signIn);
    if (logoutBtn) logoutBtn.addEventListener("click", signOut);

    const saved = localStorage.getItem("user");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.email) {
          showUser(parsed.email);
        }
      } catch (e) {
        console.error("❌ 사용자 정보 파싱 실패", e);
      }
    }
  });
</script>

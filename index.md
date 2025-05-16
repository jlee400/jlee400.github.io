---
layout: home
author_profile: true
title: ""
permalink: /
---
<!-- Firebase SDK 불러오기 -->
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"></script>

<!-- Firebase 설정 -->
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
const db = firebase.firestore();
</script>

<!-- 로그인 UI -->
<h2>🔐 로그인</h2>
<button onclick="signIn()">Google 로그인</button>
<div id="user-info" style="display: none;">
  <p>👋 안녕하세요, <span id="user-email"></span>!</p>
  <button onclick="signOut()">로그아웃</button>
</div>

<script>
function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    const user = result.user;
    localStorage.setItem("user", JSON.stringify({
      uid: user.uid,
      email: user.email
    }));
    showUser(user.email);
  });
}

function signOut() {
  auth.signOut().then(() => {
    localStorage.removeItem("user");
    location.reload();
  });
}

function showUser(email) {
  document.getElementById("user-info").style.display = "block";
  document.getElementById("user-email").innerText = email;
}

window.onload = () => {
  const saved = localStorage.getItem("user");
  if (saved) {
    const parsed = JSON.parse(saved);
    showUser(parsed.email);
  }
};
</script>

<div style="text-align: center;">
  <h1>💡Hub solves your curiosity,<br>Juhyun's Learning Hub</h1>
  <img src="https://github.com/user-attachments/assets/4bd93b6e-9ed4-4d2d-8266-03f1a178eb2c" alt="Juhyun’s Learning hub" style="width:500px; height:auto; max-width:90%;">
</div>

<p style="text-align: center; font-size: 1.2rem; margin-top: 1rem;">
  Welcome to my learning hub where I explore Data Science, Machine Learning, and Real-world implication! 🌎📊
</p>



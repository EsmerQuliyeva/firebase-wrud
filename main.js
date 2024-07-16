import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyCF8xeMYargnmGPUx1O6xix8jF_yEEdFEk",
  authDomain: "wrud-c122c.firebaseapp.com",
  databaseURL: "https://wrud-c122c-default-rtdb.firebaseio.com",
  projectId: "wrud-c122c",
  storageBucket: "wrud-c122c.appspot.com",
  messagingSenderId: "650968328962",
  appId: "1:650968328962:web:0516ec6ebdff46c288f01b",
  measurementId: "G-DHV5TG1TEZ",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const sth = document.getElementById("sth").value;
  const fav = document.getElementById("fav").value;
  set(ref(db, "users/" + username), {
    email: email,
    password: password,
    username: username,
    sth: sth,
    fav: fav,
  });
  alert("Successfull");
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("username").value = "";
  document.getElementById("sth").value = "";
  document.getElementById("fav").value = "";
});

document.getElementById("read").addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const user_ref = ref(db, "users/" + username);
  onValue(user_ref, function (snapshot) {
    if (snapshot.exists()) {
      let data = snapshot.val();
      console.log(data);
      alert(data.email);
    } else {
      alert("No data available for this user.");
    }
  });
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("username").value = "";
  document.getElementById("sth").value = "";
  document.getElementById("fav").value = "";
});

document.getElementById("update").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const sth = document.getElementById("sth").value;
  const fav = document.getElementById("fav").value;
  let updates = {
    email: email,
    password: password,
  };
  const user_ref = ref(db, "users/" + username);
  update(user_ref, updates);
  alert("Updated");
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("username").value = "";
});

document.getElementById("delete").addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const user_ref = ref(db, "users/" + username);
  remove(user_ref);
  alert("deleted");
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("username").value = "";
  document.getElementById("sth").value = "";
  document.getElementById("fav").value = "";
});

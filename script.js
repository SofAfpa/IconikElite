// --- Cookie Banner ---
window.addEventListener('load', () => {
    if (!localStorage.getItem('cookiesAccepted')) {
      document.getElementById('cookie-banner').style.display = 'block';
    }
  });
  
  document.getElementById('accept-cookies').addEventListener('click', () => {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
  });
  
  // --- Firebase Setup ---
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAO4I8FETl5dG7kTFrbLjs0ydCsAK-7sIQ",
    authDomain: "iconikelite.firebaseapp.com",
    projectId: "iconikelite",
    storageBucket: "iconikelite.appspot.com",
    messagingSenderId: "119179810978",
    appId: "1:119179810978:web:e64c39cd7dcd731c061ffb",
    measurementId: "G-RYVDXGWXGP"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  // --- Fonctions AUTH ---
  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("✅ Inscription réussie :", userCredential.user);
        alert("Inscription réussie !");
      })
      .catch((error) => {
        console.error("❌ Erreur inscription :", error.message);
        alert("Erreur inscription : " + error.message);
      });
  }
  
  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("✅ Connexion réussie :", userCredential.user);
        alert("Connexion réussie !");
      })
      .catch((error) => {
        console.error("❌ Erreur connexion :", error.message);
        alert("Erreur connexion : " + error.message);
      });
  }
  
  // --- Gestion des formulaires ---
  window.handleSignup = function() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    signup(email, password);
  };
  
  window.handleLogin = function() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    login(email, password);
  };
  
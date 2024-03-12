// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5e821.firebaseapp.com",
  projectId: "mern-blog-5e821",
  storageBucket: "mern-blog-5e821.appspot.com",
  messagingSenderId: "155925193209",
  appId: "1:155925193209:web:7acf3d89fbd6e70da8dd28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
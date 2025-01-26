// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5INvWg5go7Jbjce-vNqbNsLHwsiCi4oY",
  authDomain: "portfolio-2c9ba.firebaseapp.com",
  projectId: "portfolio-2c9ba",
  storageBucket: "portfolio-2c9ba.firebasestorage.app",
  messagingSenderId: "1031763424866",
  appId: "1:1031763424866:web:d88f37ffddf4b395adc33b",
  measurementId: "G-1S2Q0TJ499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export {db}
// const analytics = getAnalytics(app);

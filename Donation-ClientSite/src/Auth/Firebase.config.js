// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATWTTgdklY6ddLHt6x5LzWSTXVeJqmzdw",
  authDomain: "food-donation-5f690.firebaseapp.com",
  projectId: "food-donation-5f690",
  storageBucket: "food-donation-5f690.appspot.com",
  messagingSenderId: "838930492550",
  appId: "1:838930492550:web:bbe031be9227f6a1bf3507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
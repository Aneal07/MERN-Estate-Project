// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2e5a9.firebaseapp.com",
  projectId: "mern-estate-2e5a9",
  storageBucket: "mern-estate-2e5a9.appspot.com",
  messagingSenderId: "1048712101436",
  appId: "1:1048712101436:web:7252189d18257899548d39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
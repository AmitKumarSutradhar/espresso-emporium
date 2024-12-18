// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkU8NMDeMTE9pQrofDYBdeqXxq6FoqoA4",
  authDomain: "test-project-1e8c2.firebaseapp.com",
  projectId: "test-project-1e8c2",
  storageBucket: "test-project-1e8c2.firebasestorage.app",
  messagingSenderId: "900261382915",
  appId: "1:900261382915:web:917ce70e60286fce6af736",
  measurementId: "G-31TY6Y8CGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


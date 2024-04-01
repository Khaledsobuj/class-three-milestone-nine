// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSB2cluA25y-KuanicW1iu1I0MdCas934",
    authDomain: "class-three-milestone-nine.firebaseapp.com",
    projectId: "class-three-milestone-nine",
    storageBucket: "class-three-milestone-nine.appspot.com",
    messagingSenderId: "129481091248",
    appId: "1:129481091248:web:2f97c58ff97dbfa1a3f375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
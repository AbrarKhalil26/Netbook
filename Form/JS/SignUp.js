// ---------------------------------------------------
//                      Firebase
// ---------------------------------------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQFEhhQH4okVbF5p8ZgI0OLNlk_VG6yzw",
    authDomain: "first-project-2ff2a.firebaseapp.com",
    projectId: "first-project-2ff2a",
    storageBucket: "first-project-2ff2a.appspot.com",
    messagingSenderId: "320303118549",
    appId: "1:320303118549:web:135ee63ee71e1c2e34ca5c",
    measurementId: "G-L42422J105"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Getting All the Objects of html
var Name = document.getElementById('name');
var Email = document.getElementById('email');
var Password = document.getElementById('password');


// ---------------------------------------------------
// Making an function for staring data
// ---------------------------------------------------

window.signup = function(e){
    e.preventDefault();
    var obj = {
        Name: Name.value,
        Email: Email.value,
        Password: Password.value,
    }
    createUserWithEmailAndPassword(auth , obj.Email , obj.Password)
    .then(function(success){
        alert("Signup Successfully" + success);
        window.location.replace('login.html');
    })
    .catch(function(err){
        alert("error" + err);
    })
    console.log(obj);
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw1HofWQ2c5k6xhadIhaCDaw8YB0WrFiU",
  authDomain: "weather-web-app-7a8a6.firebaseapp.com",
  databaseURL: "https://weather-web-app-7a8a6-default-rtdb.firebaseio.com",
  projectId: "weather-web-app-7a8a6",
  storageBucket: "weather-web-app-7a8a6.appspot.com",
  messagingSenderId: "891220229033",
  appId: "1:891220229033:web:5a6d3617331ed47be6a2b8",
  measurementId: "G-HPGMYSTSQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
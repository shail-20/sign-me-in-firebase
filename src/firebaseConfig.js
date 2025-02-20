// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBywacpEtR0JKrxq_yAspTVND6woKSxtfk",
  authDomain: "auth-app-7da6c.appspot.com",
  projectId: "auth-app-7da6c",
  storageBucket: "auth-app-7da6c.firebasestorage.app",
  messagingSenderId: "756026807678",
  appId: "1:756026807678:web:d0a5a1fd15e535b7174f2f",
  // measurementId: "G-MWW7LRGL61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
export { app, auth, provider };

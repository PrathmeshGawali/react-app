// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNGki8tKxXATQoC8lF8FRAsZnH366Av-8",
  authDomain: "ahen-react-1.firebaseapp.com",
  projectId: "ahen-react-1",
  storageBucket: "ahen-react-1.appspot.com",
  messagingSenderId: "1071167557058",
  appId: "1:1071167557058:web:65835ef97c23821b3f9a5b",
  measurementId: "G-68RC1XNXRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth , provider };
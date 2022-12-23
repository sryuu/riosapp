// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0Nh0JDh2ForrBuiS1YnLs7LGMLtyavlg",
  authDomain: "riosapp-6f253.firebaseapp.com",
  projectId: "riosapp-6f253",
  storageBucket: "riosapp-6f253.appspot.com",
  messagingSenderId: "622015317897",
  appId: "1:622015317897:web:445c4d66b869d27f580358",
  measurementId: "G-ZT8Q8MRZ98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db};
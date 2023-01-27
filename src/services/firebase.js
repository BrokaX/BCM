import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtZfFWR73SC_mhSO-C5dxzjl6VWvnFyQA",
  authDomain: "react-crud-ed285.firebaseapp.com",
  databaseURL: "https://react-crud-ed285-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-crud-ed285",
  storageBucket: "react-crud-ed285.appspot.com",
  messagingSenderId: "692975450992",
  appId: "1:692975450992:web:19298fa4a053c7e929adb5"
};

/* 
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};
*/

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage(app);

const FirebaseService = {
  auth,
  db,
  storage
};

export default FirebaseService;

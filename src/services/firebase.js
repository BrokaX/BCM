
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = process.env.FIREBASE_CONFIG;

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const FirebaseService = {
  db,
  storage,
};

export default FirebaseService;
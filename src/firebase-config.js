
import * as firebase from 'firebase/app';
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyD3zKxujSj_yW9D9RzOMpVsJToUI9wbhxQ",
  authDomain: "react-crud-1bcbc.firebaseapp.com",
  databaseURL: "https://react-crud-1bcbc-default-rtdb.firebaseio.com",
  projectId: "react-crud-1bcbc",
  storageBucket: "react-crud-1bcbc.appspot.com",
  messagingSenderId: "600783324306",
  appId: "1:600783324306:web:e94b9cdcfd4fafdef5124b",
  measurementId: "G-WZMQ0JC20W"
};

  const app=firebase.initializeApp(firebaseConfig)
  export const storage=getStorage(app)

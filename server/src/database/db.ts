// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId:process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID
  apiKey: "AIzaSyDdEylITBNZ4xuMp4M6qnBWTu_afx8C_1E",
  authDomain: "nuevadb-141.firebaseapp.com",
  projectId: "nuevadb-141",
  storageBucket: "nuevadb-141.appspot.com",
  messagingSenderId: "20271623850",
  appId: "1:20271623850:web:589dd9e1cb3d98438fead3",
  measurementId: "G-4NTC52CRVB"
};

// Inicializar Firebase solo si no se ha hecho previamente
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
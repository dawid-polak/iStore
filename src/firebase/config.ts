import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB_fhEZ6CjFni-wVa8HCNhULqFoqoahjKc",
  authDomain: "istore-6a02e.firebaseapp.com",
  projectId: "istore-6a02e",
  storageBucket: "istore-6a02e.appspot.com",
  messagingSenderId: "484190363403",
  appId: "1:484190363403:web:3faa59b2d9119321b24c0e",
  measurementId: "G-598RWJPHNY"
};

const firebase = () => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const db = getFirestore(app);


    return { app, analytics, auth, db } 
}

export default firebase;

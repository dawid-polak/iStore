import firebase from "./config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

interface User {
     name: string;
     lastName: string;
     mail: string;
     password: string;
     policy: boolean;
}

//firebase auth
const signUp = async (user: User) => {
     const { auth } = firebase();
     let error;
     try {
          const userCredential = await createUserWithEmailAndPassword(auth, user.mail, user.password);
          //add user to db
          await addUserToDb(userCredential.user.uid, user);
     } catch (err) {
          error = err.code;
     }

     return { error };
};

//add user to db firestore
const addUserToDb = async (idUser: string, data: User) => {
     const { db } = firebase();

     try {
          await setDoc(doc(db, "users", idUser), data);
     } catch (err) {
          console.log(err!);
     }
};

export default signUp;

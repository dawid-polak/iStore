import firebase from "./config";
import { signOut } from "firebase/auth";

const signOutUser = async () => {
     //download auth from firebase config
     const { auth } = firebase();
     try {
          //sing out user
          await signOut(auth);
     } catch (err) {
          console.log(err!);
     }
};

export default signOutUser;

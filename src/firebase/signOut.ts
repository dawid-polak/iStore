import firebase from "./config";
import { signOut } from "firebase/auth";

const signOutUser = async () => {
     const { auth } = firebase();

     try {
          await signOut(auth);
     } catch (err) {
          console.log(err!);
     }
};

export default signOutUser;

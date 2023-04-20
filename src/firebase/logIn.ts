import firebase from "./config";
import { signInWithEmailAndPassword } from "firebase/auth";

interface Data {
     mail: string;
     password: string;
}

const logIn = async (data: Data) => {
     const { auth } = firebase();
     let success;

     try {
          await signInWithEmailAndPassword(auth, data.mail, data.password);
          success = true;
     } catch (err) {
          success = false;
     }

     return { success }
};

export default logIn;

import { ref } from 'vue';
import firebase from "./config";
import { doc, getDoc } from "firebase/firestore";

let dataUser = ref();

const getDataUser = async (idUser: string) => {
    const { db } = firebase();
    try {
        const docRef = doc(db, 'users', idUser);
        const docSnap = await getDoc(docRef);
        dataUser.value = docSnap.data();
    } catch (err) {
        console.log(err)
    }
}

export default { getDataUser, dataUser };
import firebase from "./config";
import { doc, getDoc } from 'firebase/firestore';

const getProducts = async (category: "iphones" | "macbooks") => {
    const { db } = firebase();
    let data;
    let error;

    try {
        const docRef = doc(db, 'products', category);
        const docSnap = await getDoc(docRef);
        data = docSnap.data();

    } catch ( err ) {
        error = err;
    }

    return { data, error };
}


export default getProducts;
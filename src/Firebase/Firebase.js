// Import the functions you need from the SDKs you need
import { firebaseConfig } from "./config";
import { initializeApp } from "firebase/app";
import{addDoc, collection, getFirestore, } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export const saveTitle = async (name) => {
    try {
        const nameCollection = collection(database,"mi-coleccion")
    const documentguardado = await  addDoc(nameCollection, {
        title,
    });
        console.log("guardar")
        console.log(documentguardado);
    }
    catch (error) {
        console.log(error)
    }
    
    
    }


console.log(database)
console.log('hola')
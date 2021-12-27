import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDehjVu8Ou7QEd9FKupwKphmzVynlOG_o",
  authDomain: "my-chat-app-e2b6.firebaseapp.com",
  projectId: "my-chat-app-e2b6",
  storageBucket: "my-chat-app-e2b6.appspot.com",
  messagingSenderId: "101005800664",
  appId: "1:101005800664:web:3788f291ef9179ae3a252d",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export const db = getFirestore()

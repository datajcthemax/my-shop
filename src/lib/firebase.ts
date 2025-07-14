import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEG9Q59UOOBuxFJpxzRNptMSA5YVahYQ4",
  authDomain: "my-shop-5b49f.firebaseapp.com",
  projectId: "my-shop-5b49f",
  storageBucket: "my-shop-5b49f.firebasestorage.app",
  messagingSenderId: "846105809943",
  appId: "1:846105809943:web:749f3b37a1f4ae92167852",
  measurementId: "G-00PVCXZ7X7"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const auth = getAuth(app); 
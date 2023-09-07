import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkygzwha6pEnurHGQA4lqrQIXpX6hv2mQ",
  authDomain: "multimart-d26c0.firebaseapp.com",
  projectId: "multimart-d26c0",
  storageBucket: "multimart-d26c0.appspot.com",
  messagingSenderId: "998005723304",
  appId: "1:998005723304:web:11744d5060de846a98f29d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATwvyVWUNK2R5O5ST50bvq-iCCUm8tHuM",
  authDomain: "miniblog-react-9e3ea.firebaseapp.com",
  projectId: "miniblog-react-9e3ea",
  storageBucket: "miniblog-react-9e3ea.appspot.com",
  messagingSenderId: "1075584753828",
  appId: "1:1075584753828:web:cb06b9d936e260f97e0631"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
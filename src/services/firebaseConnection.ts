import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD25EtiNDv-bkKlClN3G_IS0g--Yq2Bbk0",
  authDomain: "tarefasplus-abd9c.firebaseapp.com",
  projectId: "tarefasplus-abd9c",
  storageBucket: "tarefasplus-abd9c.firebasestorage.app",
  messagingSenderId: "343185819008",
  appId: "1:343185819008:web:6e4cc0c5447c11aee26d65"
};

const fibaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fibaseApp);

export { db };
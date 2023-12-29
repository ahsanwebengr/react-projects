import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_hnlJae49t8QGpp3r3-sZoKY_Y9jeJYk",
    authDomain: "chap-app-71a7e.firebaseapp.com",
    projectId: "chap-app-71a7e",
    storageBucket: "chap-app-71a7e.appspot.com",
    messagingSenderId: "650258430057",
    appId: "1:650258430057:web:c57613246ad172a295caf8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
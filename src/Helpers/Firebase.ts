// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtkUtZBcorrlQUmMw1712KF0fcotcJshE",
  authDomain: "fn12-a7cbf.firebaseapp.com",
  projectId: "fn12-a7cbf",
  storageBucket: "fn12-a7cbf.appspot.com",
  messagingSenderId: "819951733311",
  appId: "1:819951733311:web:c112989816abc82c1f068a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getFirestore(app)

export { app, analytics, auth };

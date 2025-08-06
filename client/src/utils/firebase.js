// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, signInAnonymously, signOut } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYaMrMuFKU3D87kHtDXuq2Ho25BkzCSLc",
  authDomain: "healthcare-assistant-platform.firebaseapp.com",
  projectId: "healthcare-assistant-platform",
  storageBucket: "healthcare-assistant-platform.firebasestorage.app",
  messagingSenderId: "725781019510",
  appId: "1:725781019510:web:b3a16329063afb05eb5857",
  measurementId: "G-PZ1LZVJWR4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Optional anonymous login function
export const anonymousLogin = async () => {
  try {
    const result = await signInAnonymously(analytics);
    console.log("Signed in anonymously:", result.user.uid);
    return result.user;
  } catch (error) {
    console.error("Anonymous login failed:", error);
  }
};

// Optional logout
export const logout = () => signOut(analytics);
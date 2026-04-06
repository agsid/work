import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Use your specific config here
const firebaseConfig = {
  apiKey: "AIzaSyDAB2RDt6Z_eAy8FEWCXVKHLnsiYj8SV8k",
  authDomain: "allied-work.firebaseapp.com",
  databaseURL: "https://allied-work-default-rtdb.firebaseio.com", // Ensure this matches your RTDB URL
  projectId: "allied-work",
  storageBucket: "allied-work.firebasestorage.app",
  messagingSenderId: "785076566154",
  appId: "1:785076566154:web:7479889509eeed4c47d573",
  measurementId: "G-GLPLFGJWJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services for use in your .astro components
export const auth = getAuth(app);
export const rtdb = getDatabase(app);
export default app;
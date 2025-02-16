// Import Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onChildAdded } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCb1HHk1QcRUp11wQC88rl7WaODxy1Ums",
  authDomain: "ellehacks-9c6c0.firebaseapp.com",
  databaseURL: "https://ellehacks-9c6c0-default-rtdb.firebaseio.com/",
  projectId: "ellehacks-9c6c0",
  storageBucket: "ellehacks-9c6c0.appspot.com",
  messagingSenderId: "282729558916",
  appId: "1:282729558916:web:1f9406777b97dc4f8b63d1",
  measurementId: "G-WDYDZ67PDY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Realtime Database

// Export database functions for use in other files
export { db, ref, push, onChildAdded };

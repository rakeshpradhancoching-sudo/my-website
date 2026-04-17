// Students Book - Final Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBuRE_hlI7FhxqL_JvHy9TbQ6yMq70jDgI",
  authDomain: "students-book-d5e37.firebaseapp.com",
  projectId: "students-book-d5e37",
  storageBucket: "students-book-d5e37.firebasestorage.app",
  messagingSenderId: "75848269402",
  appId: "1:75848269402:web:3b9d3eee4969ff48342263"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

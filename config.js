// config.js
const firebaseConfig = {
    apiKey: "YOUR_ASLI_API_KEY_YAHAN_DALEIN",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};

// Ise initialize karein
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();


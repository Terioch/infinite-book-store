const firebase = require("firebase");

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDKv-etDy3nJlHHgrr-EdkCimLAUnSiIFo",
  authDomain: "book-store-d9e12.firebaseapp.com",
  projectId: "book-store-d9e12",
  storageBucket: "book-store-d9e12.appspot.com",
  messagingSenderId: "856100238725",
  appId: "1:856100238725:web:a2d53fea0ab1b88cf700ec"
}

export default function firebaseClient() {
  const fb = firebase.default;
  if (!fb.apps.length) {
    fb.initializeApp(FIREBASE_CONFIG);
  }
}
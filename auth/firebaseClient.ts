const firebase = require("firebase");

const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

export default function firebaseClient() {
  console.log(FIREBASE_CONFIG);
  const fb = firebase.default;
  if (!fb.apps.length) {
    fb.initializeApp(FIREBASE_CONFIG);
  }
}
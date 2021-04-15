const admin = require("firebase-admin");
const serviceAccount = require("../secrets.json");

export const verifyIdToken = (token) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://book-store-d9e12.firebase.io.com"
    });
  }

  return admin.auth().verifyIdToken(token)
    .catch((err) => {
      throw err;
    });
}
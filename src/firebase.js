import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBF4iYEc5BAHPhtc17lamY-ZLVT6wYNN8E",
  authDomain: "trabalho-final-web.firebaseapp.com",
  projectId: "trabalho-final-web",
  storageBucket: "trabalho-final-web.appspot.com",
  messagingSenderId: "712344948735",
  appId: "1:712344948735:web:a8181d4d11c9a2fb4a21ca"
})

export const auth = app.auth();

export default app;
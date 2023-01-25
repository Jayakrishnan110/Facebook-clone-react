// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { initializeApp, firebase } from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWVFm4j50wyRlCMZbvsmCKADq5F13fdYE",
  authDomain: "facebook-clone-605cc.firebaseapp.com",
  databaseURL: "https://facebook-clone-605cc-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-605cc",
  storageBucket: "facebook-clone-605cc.appspot.com",
  messagingSenderId: "713265947779",
  appId: "1:713265947779:web:b83228c4f86605a28c27b6",
  measurementId: "G-VHNFC24HWL",
};

// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// signInWithPopup(auth, provider);

// auth.languageCode = "it";

// signInWithPopup(auth, provider).then((result) => {
//   const credential = GoogleAuthProvider.credentialFromResult(result);
//   const token = credential.accessToken;
//   const user = result.user;
// });
const provider = new GoogleAuthProvider();
// provider.addScope("https://www/googleapis.com/auth/contacts.readonly");
// provider.setCustomParameters({
//   login_hint: "jayakrish10s10@gmail.com",
// });

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => console.log(error));
// };

export { auth, provider };
export default db;

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDFF0ei0sVIkeq9FngdoqHXDRj56GeH_pY",
  authDomain: "walletwise-b1c85.firebaseapp.com",
  projectId: "walletwise-b1c85",
  storageBucket: "walletwise-b1c85.appspot.com",
  messagingSenderId: "622441417502",
  appId: "1:622441417502:web:1f6e6f232bb2c70e35d70f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
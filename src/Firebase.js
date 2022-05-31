import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbHVEQPtoneUSvtvHHmGG1jr2C56-jRww",
  authDomain: "mathongo-ec845.firebaseapp.com",
  projectId: "mathongo-ec845",
  storageBucket: "mathongo-ec845.appspot.com",
  messagingSenderId: "708152590266",
  appId: "1:708152590266:web:c3c714a6d461b11942a783",
  measurementId: "G-NM8V7YJJXH"
};


 if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)

 const storage = firebase.storage()
 const auth = firebase.auth()
 const db = firebase.firestore()
 
 export {auth,db,firebase,storage} 


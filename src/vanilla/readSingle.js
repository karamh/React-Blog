import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export async function readSingle( collection , document ){

  const firebaseConfig = {
    apiKey: "AIzaSyDjtkUy1PFX-Y3mtR3CNjrIOsBBc2G5ke0",
    authDomain: "react-blog-60ad8.firebaseapp.com",
    projectId: "react-blog-60ad8", 
    storageBucket: "react-blog-60ad8.appspot.com",
    messagingSenderId: "1084449267431",
    appId: "1:1084449267431:web:f07ee3256a1b816112cc42"
  };
  
  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app);
  
  const docRef = doc(db, `${collection}/${document}`);
  
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return(docSnap.data());
  } else {
    return(null);
  }

}
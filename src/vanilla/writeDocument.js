import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";

export async function writeDocument( collection , document , data){

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

  try {
    const docRef = await setDoc(doc(db, `${collection}/${document}`), {
        Banner: data.banner,
        Title: data.title,
        Body: data.body,
        Slug: data.slug
    });
  
    return("Document updated successfully");
  } catch (e) {
    return(e);
  }

}

//creating a collection and a document
// try {
//     const docRef = await addDoc(collection(db, "users"), {
//       firstName: "karam",
//       lastName: "Haggui",
//       BirthYear: 1998
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
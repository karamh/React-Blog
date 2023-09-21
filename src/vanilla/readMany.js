import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection } from "firebase/firestore";

export async function readMany( collectionPar ){

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
    
    const docRef = collection(db, collectionPar);

    let returnVal = [];
    
    const docSnap = await getDocs(docRef)

    if(docSnap.size > 0){
        docSnap.forEach((doc) => {
            returnVal.push([doc.id,doc.data()]);
        })
    }
    
    return returnVal;
}


import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadImage( file, fileName ){

    const firebaseConfig = {
        apiKey: "AIzaSyDjtkUy1PFX-Y3mtR3CNjrIOsBBc2G5ke0",
        authDomain: "react-blog-60ad8.firebaseapp.com",
        projectId: "react-blog-60ad8", 
        storageBucket: "react-blog-60ad8.appspot.com",
        messagingSenderId: "1084449267431",
        appId: "1:1084449267431:web:f07ee3256a1b816112cc42"
    };
    
    const app = initializeApp(firebaseConfig);

    const storage = getStorage(app);

    const storageRef = ref(storage, 'images/' + fileName);
    
    let returnURL = uploadBytes(storageRef, file)
    .then(snapshot => {
      return getDownloadURL(snapshot.ref)
    })
    .then(downloadURL => {
        return downloadURL;
    })

    return returnURL

}
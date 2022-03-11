import { db, storage } from "../configuration/FirebaseConfig";
import firebase from 'firebase/app';

// ! Added to check user is active or not 
export const checkActive = (id) => {

    return db.collection('users').doc(id)
        .get().then((querySnapshot) => {
            return querySnapshot.data().active;
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}
// ! ----------------------------------
export const checkUser = (id) => {

    return db.collection('users').doc(id)
        .get().then((querySnapshot) => {
            let data = querySnapshot.data();
            
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}
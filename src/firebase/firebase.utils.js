import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-pNbOYfi6TGUynZREa6iU-5d6GqgNIhQ",
    authDomain: "visible-dot.firebaseapp.com",
    databaseURL: "https://visible-dot.firebaseio.com",
    projectId: "visible-dot",
    storageBucket: "",
    messagingSenderId: "940186835232",
    appId: "1:940186835232:web:fe13baf38afe3248"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //if the snap shot doesn't exist create new user in db
    if(!snapShot.exists) {
        const {displayName, email, photoURL}  = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    } 
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); // trigering the google pop up whenever we use the provider for authentication and signin
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASSC1nCfQuUMjJuCbye6D1quRmG5nLwo0",
    authDomain: "crwn-db-6e64d.firebaseapp.com",
    databaseURL: "https://crwn-db-6e64d.firebaseio.com",
    projectId: "crwn-db-6e64d",
    storageBucket: "crwn-db-6e64d.appspot.com",
    messagingSenderId: "975712039738",
    appId: "1:975712039738:web:7f102fa5494b5ba2939603"
  }

  export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    //console.log(snapShot)
    if (!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch (error){
        console.log('error creating user',error.message)
      }
    }
    return userRef;
  } 


  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoolgle = () => auth.signInWithPopup(provider);

  export default firebase;
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREMASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREMASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREMASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREMASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREMASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
export const useFirebase = (): any => {
  return { firebase, auth };
};
export { auth, firebase };

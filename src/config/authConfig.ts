import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: '<api-key>',
  authDomain: '<auth-domain>',
  databaseURL: '<auth-domain>',
  projectId: '<auth-domain>',
  storageBucket: '<auth-domain>',
  messagingSenderId: 'n-a',
  appId: 'n-a',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
export const useFirebase = (): any => {
  return { firebase, auth };
};
export { auth, firebase };

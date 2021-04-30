import React from 'react';
import firebase from 'firebase/app';
import { useFirebase } from '../../config/authConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  // callbacks: {
  //   signInSuccessWithAuthResult: () => false,
  // },
};
const LoginButtons = (): any => {
  const contextFirebase = useFirebase();

  return (
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={contextFirebase.auth}
    />
  );
};

export default LoginButtons;

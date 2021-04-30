import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import { useFirebase } from '../../config/authConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useNavigate } from 'react-router-dom';

const LoginButtons = (): any => {
  const navigate = useNavigate();
  const contextFirebase = useFirebase();

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
    callbacks: {
      signInSuccessWithAuthResult: () => {
        localStorage.setItem('user', 'true');
        navigate('/');
        return false;
      },
    },
  };
  useEffect(() => {
    localStorage.setItem('user', contextFirebase.auth.currentUser);
  }, []);

  return (
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={contextFirebase.auth}
    />
  );
};

export default LoginButtons;

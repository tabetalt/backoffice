import React from 'react';
import firebase from 'firebase/app';
import { useAuth } from '../../context/AuthContext';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export const LoginButtons = (): any => {
  const { auth } = useAuth();

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
};

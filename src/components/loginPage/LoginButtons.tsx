import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../../config/authConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const LoginButtons = (): any => {
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
};

export default LoginButtons;

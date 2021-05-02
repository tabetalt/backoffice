import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../../config/authConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useNavigate } from 'react-router-dom';

const LoginButtons = (): any => {
  const navigate = useNavigate();

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        localStorage.setItem('user', auth.currentUser?.uid || '');
        auth.currentUser?.getIdToken().then(function (token) {
          localStorage.setItem('token', token || '');
        });
        navigate('/');
        return false;
      },
    },
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
};

export default LoginButtons;

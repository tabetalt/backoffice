import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

interface ContextValue {
  currentUser: firebase.User | null;
  auth: firebase.auth.Auth;
  hasCapability?: (capability: string) => boolean;
  isLoggedIn: () => boolean;
}

export const AuthContext = React.createContext<ContextValue>({
  currentUser: null,
  auth,
} as ContextValue);

export function useAuth(): ContextValue {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  function isLoggedIn(): boolean {
    return currentUser ? true : false;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return function cleanup() {
      unsubscribe();
    };
  }, []);

  const hasCapability = (capability: string) => {
    const { capabilities = [] } = currentUser;
    return Boolean(capabilities.includes(capability));
  };

  const context = {
    hasCapability,
    currentUser,
    auth,
    isLoggedIn,
  };

  return (
    <AuthContext.Provider value={context}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

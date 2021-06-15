import React, { useContext, useState } from 'react';
import { createContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Auth from '../services/auth';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  signed: boolean;
  signIn: () => void;
  signOut: () => void;
  token: string;
  user: object | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState('');

  async function signIn() {
    const response = await Auth.signIn();

    if (response.user) {
      setUser(response.user);
      // setToken(token);

      await AsyncStorage.setItem('@RnAuth:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@RnAuth:token', response.token);
    }
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), signIn, signOut, token, user }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

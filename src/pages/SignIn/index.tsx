import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export default function SignIn() {
  const { signed, signIn, user } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleSignIn} title="Sign In"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

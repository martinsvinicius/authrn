import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export default function Dashboard() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleSignOut} title="Sign Out"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

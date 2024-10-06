import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth } from '../../../firebase'; // Adjust the path to your Firebase config
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set user state when auth state changes
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <View style={styles.container}>
      {user && (
        <Image
          source={{ uri: user.photoURL }} // Use photoURL from Firebase user object
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
      )}
      <Image
        source={require('../../../assets/images/logo.png')}
        style={{ width: 200, height: 45, objectFit: 'contain' }}
      />
      <FontAwesome name="filter" size={26} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.WHITE_TRANS,
  },
});

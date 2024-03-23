import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { useUser } from '@clerk/clerk-react';
import SignOutButton from './SignOutButton';

const ProfilePage = () => {
  const { user, signOut } = useUser();

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: user?.imageUrl }}
        style={{ width: 90, height: 90, borderRadius: 99 }}
      />
      <Text style={styles.names}>Hello, {user.fullName}</Text>
      <Text style={styles.text}>Email: {user.primaryEmailAddress.emailAddress}</Text>
      <View style={styles.buttonContainer}>
        
        <Text><SignOutButton/></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 10,
    fontFamily: 'outfit',
    fontSize: 14
  },
  names: {
    marginTop: 10,
    fontFamily: 'outfit-medium',
    fontSize: 18
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: ''
  },
});

export default ProfilePage;

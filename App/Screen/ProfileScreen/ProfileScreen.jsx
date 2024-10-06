import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../../../firebase'; // Adjust the path accordingly
import { signOut } from 'firebase/auth';

const ProfilePage = () => {
  const user = auth.currentUser; // Get the current user from Firebase

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out using Firebase
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Image 
            source={{ uri: user.photoURL }} // Use Firebase photoURL if available
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />
          <Text style={styles.names}>Hello, {user.displayName || 'User'}</Text> {/* Display name */}
          <Text style={styles.text}>Email: {user.email}</Text> {/* Email */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSignOut}>
              <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
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
    backgroundColor: '#6200ee', // Example color
  },
  buttonText: {
    color: '#fff', // Text color for sign-out button
    textAlign: 'center',
    fontFamily: 'outfit-medium',
  },
});

export default ProfilePage;

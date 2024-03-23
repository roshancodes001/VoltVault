import React from 'react';
import { Button } from 'react-native';
import { useClerk } from "@clerk/clerk-react";
import { useNavigation } from '@react-navigation/native';

const SignOutButton = () => {
  const { signOut } = useClerk();
  const navigation = useNavigation();

  return (
    // Pressing this button will sign out a user and navigate them to the "Home" screen.
    <Button    
      title="Sign out" 
      onPress={() => {
        signOut();
        navigation.navigate("Home");
      }}
      color="red"
    />
  );
};

export default SignOutButton;

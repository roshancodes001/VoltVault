import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../Utils/Colors';
import { auth } from '../../../firebase'; // Adjust the path accordingly
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onPress = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Successfully signed in
      const user = userCredential.user;
      console.log("User signed in: ", user);
      // Navigate to the next screen or perform your desired actions
    } catch (error) {
      setError(error.message);
      console.error("Error signing in with email and password: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} style={styles.logoImage} />
      <Image source={require('../../../assets/images/ev-maker.png')} style={styles.bgimage} />

      <View style={styles.formContainer}>
        <Text style={styles.heading}>Find the Nearest EV Station</Text>
        <Text style={styles.desc}>At Ease!</Text>
        <Text style={styles.small}>Get the location of all the EV stations</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={Colors.GRAY}
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={Colors.GRAY}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  logoImage: {
    width: 200,
    height: 60,
    objectFit: 'contain',
    marginTop: 40,
  },
  bgimage: {
    width: '200%',
    height: 180,
    marginTop: 40,
    objectFit: 'contain',
  },
  formContainer: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    marginTop: 30,
  },
  small: {
    textAlign: 'center',
    marginVertical: 5,
  },
  desc: {
    fontSize: 25,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    color: '#03A63C',
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 30,
    marginTop: 30,
    width: '80%', // Ensure button width matches input fields
  },
  buttonText: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: 'outfit',
    fontSize: 17,
  },
  input: {
    height: 50,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: '80%',
    backgroundColor: 'white', // Optional: make the input fields stand out
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2, // For Android
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
});

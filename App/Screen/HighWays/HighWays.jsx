import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import Colors from '../../Utils/Colors';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleButtonClick1 = () => {
    navigation.navigate('1');
  };

  const handleButtonClick2 = () => {
    navigation.navigate('2');
  };

  const handleButtonClick3 = () => {
    navigation.navigate('3');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.buttonContainer}>
        <Button title="Chennai to Bangalore Highway" onPress={handleButtonClick1} color={Colors.GRAY} style={styles.button} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Chennai to Coimbatore Highway" onPress={handleButtonClick2} color={Colors.GRAY} style={styles.button} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Chennai to Trichy" onPress={handleButtonClick3} color={Colors.GRAY} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  button: {
    borderWidth: 10,
    marginTop:10
  },
});

export default HomeScreen;

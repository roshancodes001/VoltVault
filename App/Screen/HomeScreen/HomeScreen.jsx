import { View, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AppMapView from './AppMapView';
import Header from './Header';
import PlaceListView from './PlaceListView';
import { UserLocationContext } from '../../Context/UserLocationContext';
import { auth } from '../../../firebase'; // Adjust the path to your Firebase config

export default function HomeScreen() {
  const { location } = useContext(UserLocationContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update user state when authentication state changes
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Header user={user} /> {/* Pass user to Header if needed */}
        <Text style={{
          textAlign: 'center',
          fontFamily: 'outfit-bold',
          fontSize: 28
        }}>Stations Near You</Text>
      </View>

      {/* Place List View */}
      <View style={styles.placeListContainer}>
        <PlaceListView />
      </View>

      {/* Map View */}
      <View style={styles.mapContainer}>
        <AppMapView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10, // Added padding top to account for the Header height
  },
  placeListContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 10,
  },
  mapContainer: {
    flex: 1,
    zIndex: 1, // Ensure map is below other components
  },
});

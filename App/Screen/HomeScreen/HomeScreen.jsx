import { View, StyleSheet,Text } from 'react-native';
import React, { useContext } from 'react';
import AppMapView from './AppMapView';
import Header from './Header';
import SearchBar from './SearchBar';
import PlaceListView from './PlaceListView';
import { UserLocationContext } from '../../Context/UserLocationContext';


export default function HomeScreen() {
  const { location } = useContext(UserLocationContext);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Header />
        <Text style={{
          textAlign:'center',
          fontFamily:'outfit-bold',
          fontSize:28
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
    width:'100%' // Ensure PlaceListView is visible above the map
  },
  mapContainer: {
    flex: 1,
    zIndex: 1, // Ensure map is below other components
  },
});

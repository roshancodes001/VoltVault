import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewStyle from './../../Utils/MapViewStyle';
import { UserLocationContext } from '../../Context/UserLocationContext';
import { chargingStationsData } from '../../../assets/data/Chennai.js';
import { findNearbyEVStations } from '../../Utils/EVStationUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppMapView = () => {
  const { location } = useContext(UserLocationContext);
  const [nearbyStations, setNearbyStations] = useState([]);

  useEffect(() => {
    // Call findNearbyEVStations to get nearby stations
    if (location) {
      const nearbyStationsData = findNearbyEVStations(
        chargingStationsData,
        location.latitude,
        location.longitude,
        10 // Example radius of 10 kilometers
      );
      setNearbyStations(nearbyStationsData);
      
      // Store nearby stations data in AsyncStorage
      AsyncStorage.setItem('nearbyStations', JSON.stringify(nearbyStationsData))
        .then(() => console.log('Nearby stations data stored successfully'))
        .catch(error => console.error('Error storing nearby stations data:', error));
    }
  }, [location]);

  // Assign user's latitude and longitude to variables
  const userLatitude = location?.latitude || 0;
  const userLongitude = location?.longitude || 0;

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      customMapStyle={MapViewStyle}
      region={{
        latitude: userLatitude,
        longitude: userLongitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}
    >
      {/* User Location Marker */}
      {location && (
        <Marker
          coordinate={{
            latitude: userLatitude,
            longitude: userLongitude
          }}
        >
          <Image
            source={require('./../../../assets/images/car-maker.png')}
            style={styles.markerImage}
          />
        </Marker>
      )}

      {/* Charging Stations Markers */}
      {nearbyStations.map(station => (
        <Marker
          key={station['S.No']}
          coordinate={{
            latitude: parseFloat(station.Latitude),
            longitude: parseFloat(station.Longitude)
          }}
          title={station.Name}
          description={station.Address}
        >
          <Image
            source={require('./../../../assets/images/ev-maker.png')}
            style={styles.evImage}
          />
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  markerImage: {
    width: 50,
    height: 50,
  },
  evImage: {
    width: 26,
    height: 40,
  },
});

export default AppMapView;

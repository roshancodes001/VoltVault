import React, { useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewStyle from './../../Utils/MapViewStyle';
import { UserLocationContext } from '../../Context/UserLocationContext';
import { cbStationsData } from '../../../assets/data/chennai-bangalore.js';

import Header from './Header';


const AppMapView = () => {
  const { location } = useContext(UserLocationContext);

  // Assign user's latitude and longitude to variables
  const userLatitude = location?.latitude || 0;
  const userLongitude = location?.longitude || 0;

  return (
    <View style={styles.container}>
      {/* Roadot component */}
      <Header />
      
      {/* MapView component */}
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
        {cbStationsData.map(station => (
          <Marker
            key={station['S.no']}
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude
            }}
            title={station.name}
            description={station.address}
          >
            <Image
              source={require('./../../../assets/images/ev-maker.png')}
              style={styles.evImage}
            />
          </Marker>
        ))}
      </MapView>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
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

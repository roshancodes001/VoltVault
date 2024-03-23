import React, { useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewStyle from './../../Utils/MapViewStyle';
import { UserLocationContext } from '../../Context/UserLocationContext';
import { ccStationsData } from '../../../assets/data/coimbatore';

const AppMapView = () => {
  const { location } = useContext(UserLocationContext);

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
      {ccStationsData.map(station => (
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

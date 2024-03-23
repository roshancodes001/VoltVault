import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlaceItem from './PlaceItem';
// Other imports...

const PlaceListView = () => {
    const [nearbyStations, setNearbyStations] = useState([]);
  
    useEffect(() => {
      // Retrieve nearby stations data from AsyncStorage
      const fetchNearbyStations = async () => {
        try {
          const storedData = await AsyncStorage.getItem('nearbyStations');
          console.log('Stored Data:', storedData); // Log stored data to console
          if (storedData) {
            // Parse JSON data and convert latitude and longitude to numbers
            const parsedData = JSON.parse(storedData).map(station => ({
              ...station,
              latitude: parseFloat(station.latitude),
              longitude: parseFloat(station.longitude),
            }));
            // Log parsed data to console
            setNearbyStations(parsedData);
          }
        } catch (error) {
          console.error('Error retrieving nearby stations data:', error);
        }
      };
  
      fetchNearbyStations();
    }, []);
  
    return (
      <View>
        <FlatList 
          data={nearbyStations}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          renderItem={({ item, index }) => (
            <View key={index}>
              <PlaceItem 
                place={item}
                latitude={item.latitude}
                longitude={item.longitude}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  
  export default PlaceListView;
  
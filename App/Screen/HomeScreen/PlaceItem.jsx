import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Colors from '../../Utils/Colors';

const PlaceItem = ({ place, latitude, longitude }) => {
  // Function to handle navigation button press
  const handleNavigate = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={{ 
        backgroundColor: Colors.WHITE,
        margin: 5,
        borderRadius: 10,
        width: Dimensions.get('screen').width * 0.95,
        flexDirection: 'column',
        justifyContent: 'space-between', // Align items with space between them
        alignItems: 'stretch', // Stretch items to fill the container horizontally
    }}>
      {/* Place Image */}
      <Image 
        source={require('../../../assets/images/2.png')}
        style={{
          width: 'auto',
          height: 130,
          borderRadius: 10,
        }}
      />
      
      {/* Place Details */}
      <View style={{ padding: 15 }}>
        <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 18,
        }}>{place.Name}</Text>
        <Text style={{
          fontSize: 8,
          fontFamily: 'outfit',
        }}>{place.Address}</Text>
        
        {/* Additional Details */}
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent:'space-around' }}>
          <View>
            <Text style={{
              fontFamily: 'outfit',
              color: Colors.GRAY
            }}>Supported </Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 17,
              paddingLeft:18
            }}>{place.Type}</Text>
          </View>
          <View>
            <Text style={{
              fontFamily: 'outfit',
              color: Colors.GRAY,
              paddingLeft:8
            }}>Status</Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 17,
              }}>{place.Status}</Text>
          </View>
        </View>
      </View>
      
      {/* Navigation Button */}
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          borderRadius: 8,
          padding: 10,
          alignItems: 'center',
          marginHorizontal: 15,
          marginBottom: 15,
        }}
        onPress={handleNavigate}
      >
        <Text style={{ color: Colors.WHITE, fontFamily: 'outfit-medium' }}>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceItem;

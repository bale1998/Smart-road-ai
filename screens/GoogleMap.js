import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const potholeCoordinates = [
  { latitude: -29.3, longitude: 27.5 },
  { latitude: -29.35, longitude: 27.45 },
  // Add more pothole coordinates as needed
];

const GoogleMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -29.3146,
          longitude: 27.4838,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {potholeCoordinates.map((pothole, index) => (
          <Marker
            key={index}
            coordinate={pothole}
            title={`Pothole ${index + 1}`}
            description="Severity: High" // You can customize this description
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GoogleMap;

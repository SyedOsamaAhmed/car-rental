import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const bookingdetails = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.detailscontainer}>
        <Text style={styles.heading}>Booking Details</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    backgroundColor: '#000000',
    flex: 1,
  },

  heading: {
    backgroundColor: '#fcba03',
    fontSize: 20,
    fontWeight: 'bold',
  },

  detailscontainer: {
    display: 'flex',
    flex: 2,
   margin:5,
  },
});
export default bookingdetails;

import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import DataContext from "../context/DataContext";
import { useNavigation } from "@react-navigation/native";

const bookingconfirm = () => {
  const { bookings } = useContext(DataContext);
  const navigation = useNavigation();
  return (
    <View style={styles.bookings}>
      <Text style={styles.bookingdetail}> {bookings.name}</Text>
      <Text style={styles.bookingdetail}> {bookings.age}</Text>
      <Text style={styles.bookingdetail}> {bookings.cnic}</Text>
      <Text style={styles.bookingdetail}>{bookings.bookingstartperiod}</Text>
      <Text style={styles.bookingdetail}> {bookings.bookingendperiod}</Text>
      <Text style={styles.bookingdetail}>{bookings.bookingtime}</Text>
      <Button
        title="Confirm"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bookings: {
    flex: 1,
    justifyContent: "center",
  },

  bookingdetail: {
    color: "#000000",
    fontSize: 20,
    marginHorizontal: 25,
  },

  button: {
    borderRadius: 10,
    width: "70%",
  },

  buttonContainer: {
    margin: 10,
    flexDirection: "row-reverse",
  },

  text: {
    color: "#f0ede6",
    alignbookingss: "center",
  },
});

export default bookingconfirm;

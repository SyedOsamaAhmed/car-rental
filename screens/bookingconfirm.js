import React, { useContext } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import DataContext from "../context/DataContext";
import { useNavigation } from "@react-navigation/native";
import database from "@react-native-firebase/database";

const bookingconfirm = () => {
  const { bookings } = useContext(DataContext);
  const navigation = useNavigation();

  function writetoDatabase(bookings) {
    const newReference = database().ref("users/");
    newReference.once("value").then((snapshot) => {
      if (snapshot.val != null) {
       console.log(snapshot.val())
       console.log(bookings.cnic)
        if (snapshot.hasChild(bookings.cnic)) {

            newReference
              .set({
                name: bookings.name,
                cnic: bookings.cnic,
                bookingstart: bookings.bookingstartperiod,
                bookindend: bookings.bookingendperiod,
                bookingtime: bookings.bookingtime,
                driverstatus: bookings.driverstatus,
              })
              .then(() => console.log("Added successfully"));
          
        } else {
          Alert.alert("cnic not found!");
        }
      }
    });
  }
  return (
    <View style={styles.bookings}>
      <Text style={styles.bookingdetail}>Name:{" " + bookings.name}</Text>

      <Text style={styles.bookingdetail}>CNIC:{" " + bookings.cnic}</Text>
      <Text style={styles.bookingdetail}>
        Booking Start Date:{" " + bookings.bookingstartperiod}
      </Text>
      <Text style={styles.bookingdetail}>
        Booking End Date:{" " + bookings.bookingendperiod}
      </Text>
      <Text style={styles.bookingdetail}>
        Booking Time:{" " + bookings.bookingtime}
      </Text>
      <Text style={styles.bookingdetail}>
        Driver:{" " + bookings.driverstatus}
      </Text>
      <Button
        title="Confirm"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={() => writetoDatabase(bookings)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bookings: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#0a0a0a",
  },

  bookingdetail: {
    color: "#ffffff",
    fontSize: 20,
    marginHorizontal: 8,
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

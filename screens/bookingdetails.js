import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import DatePicker from "react-native-date-picker";
import DataContext from "../context/DataContext";
import database from "@react-native-firebase/database";

const BookingDetails = () => {
  const { cnic, name } = useContext(DataContext);
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndtDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  const [age, setAge] = useState();
  const [carname, setCarname] = useState();

  function writeData(age, startdate, enddate, date) {
    console.log("inside get data");
    const Reference = database()
      .ref("users/" + cnic)
      .push("Bookings");

    console.log(age, startdate, enddate, date);
    /*   Reference.once("value").then((snapshot) => {
      if (snapshot.val() != null) {
        Reference.set({
          age: age,
          bookingtime: date,
          bookingstartdate: startdate,
          bookingenddate: enddate,
        });
      }
    }); */
  }

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.heading}>Booking Details</Text>
<View style={styles.bookinginfo}>

      <Text style={styles.bookingtitle}>Name: {name}</Text>
      <Text style={styles.bookingtitle}>CNIC: {cnic}</Text>
</View>

      <Input
        placeholder="Age"
        containerStyle={styles.inputContainer}
        containerStyle={styles.inputContainer}
        onChangeText={(age) => setAge(age)}
        keyboardType="numeric"
      />
      <Input
        placeholder="Car Name"
        containerStyle={styles.inputContainer}
        containerStyle={styles.inputContainer}
        onChangeText={(carname) => setCarname(carname)}
      />

      <View style={styles.detailsContainer}>
        <View style={styles.bookingstartdate}>
          <View style={styles.bookingtitlecontainer}>
            <Text style={styles.bookingtitle}>Booking Start date</Text>
          </View>
          <Button
            title="Start date"
            type="outline"
            containerStyle={styles.buttoncontainer}
            onPress={() => setOpenStartDate(true)}
          />
          <DatePicker
            modal
            open={openStartDate}
            date={startdate}
            mode="date"
            onConfirm={(date) => {
              setOpenStartDate(false);
              setStartDate(date);
            }}
            onCancel={() => {
              setOpenStartDate(false);
            }}
          />
        </View>

        <View style={styles.bookingenddate}>
          <View style={styles.bookingtitlecontainer}>
            <Text style={styles.bookingtitle}>Booking End date</Text>
          </View>

          <Button
            title="End date"
            type="outline"
            containerStyle={styles.buttoncontainer}
            onPress={() => setOpenEndDate(true)}
          />

          <DatePicker
            modal
            open={openEndDate}
            date={enddate}
            mode="date"
            onConfirm={(date) => {
              setOpenEndDate(false);
              setEndtDate(date);
            }}
            onCancel={() => {
              setOpenEndDate(false);
            }}
          />
        </View>

        <View style={styles.bookingtime}>
          <View style={styles.bookingtitlecontainer}>
            <Text style={styles.bookingtitle}>Booking Time</Text>
          </View>
          <Button
            title="Select time"
            type="outline"
            containerStyle={styles.buttoncontainer}
            onPress={() => setOpen(true)}
          />

          <DatePicker
            modal
            open={open}
            date={date}
            mode="time"
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <View style={styles.uploadcontainer}>
          <Icon name="upload" size={18} color="#fcfcfc" />
          <View style={styles.uploadtitlecontainer}>
            <Text style={styles.uploadtitle}>Upload License</Text>
          </View>
        </View>
      </View>

      <View style={styles.confirmbuttoncontainer}>
        <Button
          title="Confirm Booking"
          buttonStyle={styles.button}
          containerStyle={styles.buttoncontainer}
          onPress={()=>writeData(age, startdate, enddate, date)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    display: "flex",
    backgroundColor: "#000000",
    flex: 1,
  },
  uploadcontainer: {
    flexDirection: "row",
    marginHorizontal: 8,
  },

  uploadtitlecontainer: {
    marginHorizontal: 8,
  },

  uploadtitle: {
    color: "#fafffb",
    fontSize: 15,
  },

  heading: {
    color: "#fcba03",
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
  },

  bookingstartdate: {
    flexDirection: "row",
    justifyContent:'space-between',
    margin: 5,
  },
  bookinginfo:{
    marginHorizontal:8,
  },

  bookingenddate: {
    flexDirection: "row",
    justifyContent:'space-between',
    margin: 5,
  },
  bookingtitlecontainer: {
    marginHorizontal: 8,
  },

  bookingtitle: {
    color: "#fafffb",
    fontSize: 17,
  },

  bookingtime: {
    flexDirection: "row",
    justifyContent:'space-between',
    margin: 5,
  },

  title: {
    color: "#fafffb",
    fontSize: 16,
    margin: 3,
  },

  buttoncontainer: {
    width: "50%",
  },

  confirmbuttoncontainer: {
    margin: 5,
    flexDirection: "row-reverse",
  },
  inputContainer: {
    display: "flex",
    margin: 3,
  },

  button: {
    backgroundColor: "rgba(78, 116, 289, 1)",
    borderRadius: 3,
  },
  detailsContainer: {
    justifyContent: "space-between",
    margin: 5,
  },
});
export default BookingDetails;

import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import DatePicker from "react-native-date-picker";
import DataContext from "../context/DataContext";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

const BookingDetails = () => {
  const { setBookings } = useContext(DataContext);
  const [cnic, setCNIC] = useState();
  const [name, setName] = useState();
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndtDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  const [address, setAddress] = useState();
  const navigation = useNavigation();

  function datetimeSeparation(date, startdate, enddate) {
    console.log("inside date time separation");

    //Separatig time from date:
    let bookdate = moment(date).format("dddd,MMMM Do YYYY,h:mm:ss a");
    let time = bookdate.toString();
  

    let [, , booktime] = time.split(",");

    //Separating date from time:

    let bookstartdate = moment(startdate).format("dddd,MMMM Do YYYY,h:mm a");
    let [, bookstarttime] = bookstartdate.split(",");

    let bookingenddate = moment(enddate).format("dddd,MMMM Do YYYY,h:mm a");
    let [, bookendtime] = bookingenddate.split(",");

    const booking = {
      name: name,
 
      cnic: cnic,
      address: address,
      bookingstartperiod: bookstarttime,
      bookingendperiod: bookendtime,
      bookingtime: booktime,
    };
    console.log(booking)
    setBookings(booking);
   navigation.navigate("Booking Confirmation")
  }

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.heading}>Booking Details</Text>

      <Input
        placeholder="Name"
        containerStyle={styles.inputContainer}
        onChangeText={(name) => setName(name)}
        inputStyle={styles.inputtext}
      />

      <Input
        placeholder="CNIC"
        containerStyle={styles.inputContainer}
        onChangeText={(cnic) => setCNIC(cnic)}
        keyboardType="numeric"
        inputStyle={styles.inputtext}
      />
      <Input
        placeholder="Address"
        containerStyle={styles.inputContainer}
        onChangeText={(address) => setAddress(address)}
        inputStyle={styles.inputtext}
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
      </View>

      <View style={styles.confirmbuttoncontainer}>
        <Button
          title="Confirm Booking"
          buttonStyle={styles.button}
          containerStyle={styles.buttoncontainer}
          onPress={() => {
          
            datetimeSeparation(date, startdate, enddate);
            navigation.navigate("Booking Confirmation")
          }}
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

  inputtext: {
    color: "#fff",
  },

  heading: {
    color: "#fcba03",
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
  },

  bookingstartdate: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },

  bookingenddate: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    justifyContent: "space-between",
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
export default BookingDetails;

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import DatePicker from 'react-native-date-picker';



const BookingDetails = () => {
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndtDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);



  return (
    <View style={styles.maincontainer}>
      <Text style={styles.heading}>Booking Details</Text>
      
      <Input placeholder="Name" containerStyle={styles.inputContainer} />
      <Input placeholder="CNIC" containerStyle={styles.inputContainer} />
      <Input placeholder="Age" containerStyle={styles.inputContainer} />

      <View style={styles.detailsContainer}>
        <View style={styles.bookingstartdate}>
          <Text style={styles.bookingtitle}>Booking Start date</Text>
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
            onConfirm={date => {
              setOpenStartDate(false);
              setStartDate(date);
            }}
            onCancel={() => {
              setOpenStartDate(false);
            }}
          />
        </View>

        <View style={styles.bookingenddate}>
          <Text style={styles.bookingtitle}>Booking End date</Text>
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
            onConfirm={date => {
              setOpenEndDate(false);
              setEndtDate(date);
            }}
            onCancel={() => {
              setOpenEndDate(false);
            }}
          />
        </View>

        <View style={styles.bookingtime}>
          <Text style={styles.bookingtitle}>Booking Time</Text>
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
            onConfirm={date => {
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
        />
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
    color: '#fcba03',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 8,
  },

  bookingstartdate: {
    flexDirection: 'row',
    margin: 5,
  },

  bookingenddate: {
    flexDirection: 'row',
    margin: 5,
  },

  bookingtitle: {
    color: '#fafffb',
    fontSize: 17,
    margin: 10,
  },

  bookingtime: {
    flexDirection: 'row',
    margin: 5,
  },

  title: {
    color: '#fafffb',
    fontSize: 16,
    margin: 3,
  },

  buttoncontainer: {
    width: '50%',
    margin: 8,
  },

  confirmbuttoncontainer: {
    margin: 5,
    flexDirection: 'row-reverse',
  },
  inputContainer: {
    display: 'flex',
    margin: 3,
  },

  button: {
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderRadius: 3,
  },
  detailsContainer: {
    justifyContent: 'space-between',
    margin: 5,
  },
});
export default BookingDetails;

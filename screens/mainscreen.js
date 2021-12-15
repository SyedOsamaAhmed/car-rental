import React, {memo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Button} from 'react-native-elements';
import database from '@react-native-firebase/database';

const mainscreen = ({navigation}) => {
  const images = [
    require('../assets/Honda-City.jpg'),
    require('../assets/vitz.jpg'),
    require('../assets/mehran.jpg'),
    require('../assets/rent_a_car.jpg'),
  ];

  const extractCarDetails = () => {
    let carlist = [];
    let newcar = {};
    database()
      .ref('/owners')
      .once('value')
      .then(snapshot => {
        if (snapshot !== null) {
          snapshot.forEach(function (item) {
            item.child('Cars').forEach(function (subitem) {
              newcar = subitem.val();
              newcar['numberplate'] = subitem.key;
              carlist.push(newcar);
            });
          });
        }
      });
    navigation.navigate('DetailsScreen', {list:carlist});
  };
  return (
    <View style={styles.maincontainer}>
      <SliderBox
        images={images}
        sliderBoxHeight={200}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        autoplay
        circleLoop
      />

      <Text style={styles.tagline}>{'Don’t dream it. Drive it!'}</Text>

      <Text style={styles.headline}>
        Browse the best cars at economical prices and guranteed Safety
      </Text>

      <Button
        title="Browse"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={() => extractCarDetails()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    flex: 1,

    backgroundColor: '#000000',
  },

  tagline: {
    color: '#ffffff',
    fontSize: 24,
    margin: 12,
  },

  headline: {
    color: '#ffffff',
    fontSize: 18,
    margin: 3,
  },

  button: {
    borderRadius: 10,
    width: '70%',
  },

  buttonContainer: {
    margin: 5,

    flexDirection: 'row-reverse',
  },
});

export default mainscreen;

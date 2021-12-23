import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const List = props => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <View style={styles.cars}>
      <Text style={styles.cardetails}>Name: {item.name}</Text>
      <Text style={styles.cardetails}>Catagory: {item.catagory}</Text>
      <Text style={styles.cardetails}>Color: {item.color}</Text>
      <Text style={styles.cardetails}>Stereo: {item.stereo}</Text>
      <Text style={styles.cardetails}>Status: {item.licensestatus}</Text>
      <Text style={styles.cardetails}>Price/day: {item.priceperday}</Text>
      <Text style={styles.cardetails}>Price/hour: {item.priceperhour}</Text>

      <Button
        title="Book"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
  return (
    <View style={styles.footer}>
      <FlatList
        data={props.list}
        renderItem={renderItem}
        keyExtractor={item => item.numberplate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cars: {
    justifyContent: 'center',
    borderColor: '#f0ede6',
    borderWidth: 3,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  cardetails: {
    color: '#f0ede6',
    fontSize: 20,
  },

  footer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  button: {
    borderRadius: 10,
    width: '70%',
  },

  buttonContainer: {
    margin: 10,
    flexDirection: 'row-reverse',
  },

  text: {
    color: '#f0ede6',
    alignItems: 'center',
  },
});

export default List;

import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const cardetails = ({route,navigation}) => {
  const list = route.params;


  const renderItem = ({item}) => (
  
      <Text style={styles.cardetails}>{item.name}</Text>
   
  );
  return (
    <View style={styles.maincontainer}>

  <Text>{JSON.stringify(list)}</Text>
    {/*   <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.numberplate}
      />
 */}   
  </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    flex: 1,
  
  },

  cars: {
    backgroundColor: '#1ca340',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  cardetails:{
      color:'#000000',
      fontSize:15,
  },
});
export default cardetails;

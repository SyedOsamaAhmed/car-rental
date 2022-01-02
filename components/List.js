import React, { useContext,useState } from "react";
import { View, StyleSheet, Text, FlatList,Modal } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import DataContext from "../context/DataContext";

const List = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const {setSelected } = useContext(DataContext);

  let carselected={}
  const renderItem = ({ item }) => (
   

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
        onPress={() => {
          setSelected(item);
          carselected=item;
      setModalVisible(true)
          //navigation.navigate("Details");
        }}
      />
    </View>
  );
  return (
    <View style={styles.footer}>


<View style={styles.modalView}>
<Text style={styles.cardetails}>Name:{carselected.name}</Text>
      <Text style={styles.cardetails}>Catagory:</Text>
      <Text style={styles.cardetails}>Color:</Text>
      <Text style={styles.cardetails}>Stereo:</Text>
      <Text style={styles.cardetails}>Status: </Text>
      <Text style={styles.cardetails}>Price/day: </Text>
      <Text style={styles.cardetails}>Price/hour:</Text>

</View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
       
          setModalVisible(!modalVisible);}}
    />
      <FlatList
        data={props.list}
        renderItem={renderItem}
        keyExtractor={(item) => item.numberplate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cars: {
    justifyContent: "center",
    borderColor: "#f0ede6",
    borderWidth: 3,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  cardetails: {
    color: "#f0ede6",
    fontSize: 20,
  },

  footer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000000",
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
    alignItems: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default List;

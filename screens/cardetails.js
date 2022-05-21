import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import DataContext from "../context/DataContext";
import { useNavigation } from "@react-navigation/native";

const cardetails = () => {
  const { selected } = useContext(DataContext);
  const navigation = useNavigation();
  return (
    <View style={styles.cars}>
      <Text style={styles.cardetails}>Name: {selected.name}</Text>
      <Text style={styles.cardetails}>Catagory: {selected.catagory}</Text>
      <Text style={styles.cardetails}>Color: {selected.color}</Text>
      <Text style={styles.cardetails}>Status: {selected.license}</Text>
      <Text style={styles.cardetails}>Price/day: {selected.priceprday}</Text>
      <Text style={styles.cardetails}>Price/hour: {selected.priceprhour}</Text>
      <Button
        title="Confirm"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={() => {
          navigation.navigate("Details");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cars: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:"#000000",
  },

  cardetails: {
    color: "#ffffff",
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
    alignselecteds: "center",
  },
});

export default cardetails;

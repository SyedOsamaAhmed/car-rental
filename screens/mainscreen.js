import React, { useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator} from "react-native";

import { Button } from "react-native-elements";
import database from "@react-native-firebase/database";

import List from "../components/List";

const mainscreen = () => {
  const [flag, setFlag] = useState(false);
const [cars,setCars]=useState();
  const extractCarDetails = () => {
    
    let carlist = [];
    let newcar = {};
    database()
      .ref("/owners")
      .once("value")
      .then((snapshot) => {
        if (snapshot !== null) {
          snapshot.forEach(function (item) {
            item.forEach(function (subitem) {
              newcar = subitem.val();
              newcar["numberplate"] = subitem.key;
              carlist.push(newcar);
              setCars(carlist);
            });
          });
        }
      });
    setFlag(true);
  };

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.tagline}>{"Don’t dream it. Drive it!"}</Text>
      <Text style={styles.headline}>
        Browse the best cars at economical prices and guranteed Safety
      </Text>
      <Button
        title="Browse"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={() => extractCarDetails()}
      />
      {flag ? (
        <View style={styles.footer}>
          {cars ? (
            <List list={cars} />
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "#000000",
  },

  tagline: {
    color: "#ffffff",
    fontSize: 24,
    margin: 12,
  },

  headline: {
    color: "#ffffff",
    fontSize: 18,
    margin: 3,
  },

  button: {
    borderRadius: 10,
    width: "70%",
  },

  buttonContainer: {
    margin: 5,
    flexDirection: "row-reverse",
  },

  footer: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#000000",
  },
});

export default mainscreen;

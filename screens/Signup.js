import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Input, Button } from "react-native-elements";
import DataContext from "../context/DataContext";
import { useNavigation } from "@react-navigation/native";

function Signup() {
  const { signupstatus, SignUp ,setSignupStatus} = useContext(DataContext);
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [cnic, setCNIC] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <Text style={styles.heading}>Create Account</Text>
      </View>
      <View style={styles.footer}>
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          hitSlop={{
            bottom: 20,
            top: 50,
          }}
        >
          <View>
            <Input
              placeholder="Name"
              ContainerStyle={styles.inputbox}
              onChangeText={(name) => {
                setName(name);
              }}
              inputStyle={styles.inputtext}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          hitSlop={{
            bottom: 20,
            top: 50,
          }}
        >
          <View>
            <Input
              placeholder="Username"
              ContainerStyle={styles.inputbox}
              onChangeText={(username) => {
                setUsername(username);
              }}
              inputStyle={styles.inputtext}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          hitSlop={{
            bottom: 20,
            top: 50,
          }}
        >
          <View>
            <Input
              placeholder="Email"
              ContainerStyle={styles.inputbox}
              onChangeText={(email) => {
                setEmail(email);
              }}
              inputStyle={styles.inputtext}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          hitSlop={{
            bottom: 20,
            top: 50,
          }}
        >
          <View>
            <Input
              placeholder="Password"
              ContainerStyle={styles.inputbox}
              secureTextEntry={true}
              onChangeText={(password) => {
                setPassword(password);
              }}
              inputStyle={styles.inputtext}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          hitSlop={{
            bottom: 20,
            top: 50,
          }}
        >
          <View>
            <Input
              placeholder="CNIC"
              ContainerStyle={styles.inputbox}
              onChangeText={(cnic) => {
                setCNIC(cnic);
              }}
              inputStyle={styles.inputtext}
              keyboardType="numeric"
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.buttonContainer}>
          <Button
            title="Register"
            buttonStyle={styles.button}
            onPress={() => {
             
              setSignupStatus( SignUp(email, name, username, password, cnic));
              signupstatus === true
                ? navigation.navigate("Login")
                : Alert.alert("Error creating Account!");
            }}
          />
        </View>

        <TouchableWithoutFeedback
          accessibilityRole="link"
          onPress={() => navigation.navigate("Login")}
        >
          <View style={styles.innertextContainer}>
            <Text style={styles.linktext}>Already have an account! Login</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#000000",
  },

  header: {
    flex: 0.5,
    margin: 5,
    justifyContent: "flex-end",
  },

  footer: {
    flex: 3,
    justifyContent: "space-evenly",
  },
  inputtext: {
    color: "#fff",
  },

  innertextContainer: {
    flexDirection: "row-reverse",
    top: -12,
    marginLeft: 7,
  },

  linktext: {
    fontSize: 13,
    color: "#ffffff",
  },

  inputbox: {
    margin: 3,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
  },

  button: {
    width: "80%",
    borderRadius: 10,
  },

  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#ffffff",
  },

  error: {
    fontSize: 14,
  },
});
export default Signup;

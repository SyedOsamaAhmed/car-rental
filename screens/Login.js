import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Input, Button } from "react-native-elements";
import DataContext from "../context/DataContext";
import Feather from "react-native-vector-icons/Feather";


const Login = ({ navigation }) => {
  const { loginerr, SignIn } = useContext(DataContext);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [textInputChange, setTextInputChange] = useState(false);
  const [passwordvisibility, setPasswordVisibility] = useState(false);

  function detectInput(email) {
    if (email.val !== 0) {
      setEmail(email);
      setTextInputChange(true);
    } else {
      setEmail(email);
    }
  }

  function updateSecureTextEntry(password) {
    if (password !== null) {
      setPasswordVisibility(!passwordvisibility);
    }
  }

  return (
    <View style={styles.maincontainer}>
      <View style={styles.footer}>
        <Text style={styles.heading}>Welcome</Text>
        {textInputChange ? (
          <Input
            placeholder="Enter email"
            ContainerStyle={styles.inputbox}
            inputStyle={styles.inputtext}
            rightIcon={<Feather name="check-circle" color="white" size={20} />}
            rightIconContainerStyle={styles.icon}
            onChangeText={(email) => detectInput(email)}
          />
        ) : (
          <Input
            placeholder="Enter email"
            ContainerStyle={styles.inputbox}
            inputStyle={styles.inputtext}
            onChangeText={(email) => detectInput(email)}
          />
        )}

        <Input
          placeholder="Enter Password"
          ContainerStyle={styles.inputbox}
          secureTextEntry={passwordvisibility ? true : false}
          inputStyle={styles.inputtext}
          onChangeText={(password) => {
            setPassword(password);
            setPasswordVisibility(true);
          }}
          rightIcon={
            <TouchableOpacity
              onPress={(password) => updateSecureTextEntry(password)}
            >
              {passwordvisibility ? (
                <Feather name="eye" color="white" size={20} />
              ) : (
                <Feather name="eye-off" color="white" size={20} />
              )}
            </TouchableOpacity>
          }
          rightIconContainerStyle={styles.icon}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            buttonStyle={styles.button}
            onPress={() => {
              SignIn(email, password);
              {
                loginerr
                  ? Alert.alert("Unsuccessful Login")
                  : navigation.navigate("MainScreen");
              }
            }}
          />
        </View>

        
        <TouchableOpacity
          accessibilityRole="link"
          onPress={() => navigation.navigate("SignUp")}
        >
          <View style={styles.innertextContainer}>
            <Text style={styles.linktext}>Dont have an account! Regiser</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    display: "flex",
    flex: 1,

    backgroundColor: "#000000",
  },

  inputtext: {
    color: "#fff",
  },
  inputbox: {
    margin: 3,
  },
  footer: {
    flex: 1,
    justifyContent: "center",
  },

  buttonContainer: {
    flexDirection: "row-reverse",
  },

  button: {
    width: "80%",
    borderRadius: 10,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    margin: 5,
    top: -10,
  },

  icon: {
    marginRight: 10,
  },

  innertextContainer: {
    flexDirection: "row-reverse",
   
    marginLeft: 7,
  },

  linktext: {
    fontSize: 13,
    color: "#ffffff",
  },
});
export default Login;

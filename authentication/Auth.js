import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

import { Alert } from "react-native";

  function writetoDatabase(cred, name, username, cnic) {
  
    const newReference = database().ref("users/" + cred.user.uid);
  
    newReference
      .set({
        name: name,
        email: cred.user.email,
        username: username,
        cnic: cnic,
      })
      .then(() => console.log("Added successfully."));
  }
  
  const SignUp = (email, name, username, password,cnic) => {
    console.log(password,email, name, username);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log("User account created !");
  
        writetoDatabase(cred, name, username, cnic);
    
  
      })
      .catch((err) => {
        Alert.alert(err.code, err.message);
      });
  };
  
  const SignIn = (email, password) => {
    if (!email || !password) {
      Alert.alert("Please enter all fields");
    }
  
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then(()=>console.log('Successful Login'))
      .catch((err) => Alert.alert(err.code, err.message));
  };
  
  const forgotPassword = (email) => {
    if (!email) {
      Alert.alert("Please enter email");
    }
    return auth.sendPasswordResetEmail(email);
  };
  
  const Signout = () => {
    return auth.signOut();
  };
  
  export const Auth = {
    SignUp,
    SignIn,
    forgotPassword,
    Signout,
  };





import React, { useState, useEffect, createContext } from "react";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";


function writetoDatabase(cred, name, username, cnic) {
  const newReference = database().ref("users/" + cnic);

  newReference
    .set({
      name: name,
      email: cred.user.email,
      username: username,
      cnic: cnic,
    })
    .then(() => console.log("Added successfully."));
}

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [signuperr,setSignupErr] =useState();
  const [loginerr,setLoginErr] =useState();
  const [cnic, setCNIC] = useState();
  const [name, setName] = useState();
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);

    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <DataContext.Provider
      value={{
        user,
        signuperr,
        loginerr,
        cnic,
        setCNIC,
        name,
        setName,
    

        SignUp: async (email, name, username, password, cnic) => {
          await auth()
            .createUserWithEmailAndPassword(email, password)
            .then((cred) => {
           
              writetoDatabase(cred, name, username, cnic);
            
            })
            .catch((err) => {
              setSignupErr(err.message);
            });
      
        },
        SignIn: async (email, password) => {
          if (!email || !password) {
            Alert.alert("Please enter all fields");
          }

          await auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => setLoginStatus(true))
            .catch((err) => setLoginErr(err.message));
        },
        forgotPassword: async (email) => {
          if (!email) {
            Alert.alert("Please enter email");
          }
          await auth.sendPasswordResetEmail(email);
        },

        Signout: async () => {
          await auth.signOut();
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import database from '@react-native-firebase/database';

function Signup({navigation}) {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [cnic, setCNIC] = useState();

  const checkDuplicateUsers = (userlist, cnic) => {
    let flag = false;

    for (let user of userlist) {
      if (user.cnic === cnic) {
        flag = true;
      }
    }
    return flag;
  };

  function verificationEmail(email) {
    let flag = false;
    for (let letter of email) {
      if (letter === '@') {
        flag = true;
      }
    }

    return flag;
  }

  function calculateLength(password) {
    let count = 0;
    for (let char of password) {
      count++;
    }
    return count;
  }

  function passwordVerification(password, confirmpassword) {
    let len1 = calculateLength(password);
    let len2 = calculateLength(confirmpassword);
    let match = 0;

    if (len1 == len2) {
      for (let i = 0; i < len1; i++) {
        if (password[len1] == confirmpassword[len1]) {
          match++;
        }
      }
      if (match === len1) {
        return true;
      } else {
        return false;
      }
    } else {
      alert('passwords dont match');
    }
  }
  function writetoDatabase(
    name,
    username,
    password,
    email,
    cnic,
    confirmpassword,
  ) {
    if (
      verificationEmail(email) == true &&
      passwordVerification(password, confirmpassword) == true
    ) {
      const ref = database().ref('/users').push();
      let userlist = [];
      database()
        .ref('/users')
        .once('value')
        .then(snapshot => {
          if (snapshot.val() == null) {
            ref
              .set({
                name: name,
                username: username,
                email: email,
                cnic: cnic,
                password: password,
              })
              .then(() => {
                console.log('Registered successflly!');
                navigation.navigate('Login');
              });
            setName('');
            setUsername('');
            setPassword('');
            setEmail('');
            setConfirmPassword('');
            setCNIC('');
          } else {
            snapshot.forEach(user => {
              userlist.push(user.val());
            });

            const val = checkDuplicateUsers(userlist, cnic);

            if (val == true) {
              alert('Already registered!');
            } else {
              ref
                .set({
                  name: name,
                  username: username,
                  email: email,
                  cnic: cnic,
                  password: password,
                })
                .then(() => {
                  alert('Registered successflly!');
                  navigation.navigate('Login');
                });
              setName('');
              setUsername('');
              setPassword('');
              setEmail('');
              setConfirmPassword('');
              setCNIC('');
            }
          }
        });
    } else {
      if (verificationEmail(email) == false) {
        alert('email is incorrect!');
      } else if (passwordVerification(password, confirmpassword) == false) {
        alert('passwords dont match!');
      }
    }
  }

  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <Text style={styles.heading}>Create Account</Text>
      </View>
      <View style={styles.footer}>
        <Input
          placeholder="Name"
          ContainerStyle={styles.inputbox}
          onChangeText={name => {
            setName(name);
          }}
          inputStyle={styles.inputtext}
        />
        <Input
          placeholder="Username"
          ContainerStyle={styles.inputbox}
          onChangeText={username => {
            setUsername(username);
          }}
          inputStyle={styles.inputtext}
        />

        <Input
          placeholder="Email"
          ContainerStyle={styles.inputbox}
          onChangeText={email => {
            setEmail(email);
          }}
          inputStyle={styles.inputtext}
        />

        <Input
          placeholder="CNIC"
          ContainerStyle={styles.inputbox}
          onChangeText={cnic => {
            setCNIC(cnic);
          }}
          inputStyle={styles.inputtext}
          keyboardType="numeric"
        />

        <Input
          placeholder="New Password"
          secureTextEntry={true}
          ContainerStyle={styles.inputbox}
          onChangeText={password => {
            setPassword(password);
          }}
          inputStyle={styles.inputtext}
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
          ContainerStyle={styles.inputbox}
          onChangeText={repassword => {
            setConfirmPassword(repassword);
          }}
          inputStyle={styles.inputtext}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Register"
            buttonStyle={styles.button}
            onPress={() =>
              writetoDatabase(
                name,
                username,
                password,
                email,
                cnic,
                confirmPassword,
              )
            }
          />
        </View>
        <View style={styles.innertextContainer}>
          <Text style={styles.linktext}>
            Already have an account!
            <Text style={styles.innerlinktext}> Login</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#000000',
  },

  header: {
    flex: 0.5,
    margin: 5,
    justifyContent: 'flex-end',
  },

  footer: {
    flex: 3,
    justifyContent: 'space-evenly',
  },
  inputtext: {
    color: '#fff',
  },

  innertextContainer: {
    flexDirection: 'row-reverse',
    top: -12,
    marginLeft: 7,
  },

  linktext: {
    fontSize: 13,
    color: '#ffffff',
  },
  innerlinktext: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  inputbox: {
    margin: 3,
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
  },

  button: {
    width: '80%',
    borderRadius: 10,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#ffffff',
  },

  error: {
    fontSize: 14,
  },
});
export default Signup;

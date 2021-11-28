import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Input, Button } from 'react-native-elements';
import database from '@react-native-firebase/database';




const Signup = () => {
    const writetoDatabase = (name, username, password, email, cnic) => {

        if( database().ref() ==null){
console.log('inside condition')
            database().ref('users/')
                .set({
                    name: name,
                    username: username,
                    email: email,
                    cnic: cnic,
                    password: password
    
    
                })
                .then(() => console.log('Registered Successfully!'));
        }
    


        setName('');
        setUsername('');
        setPassword('');
        setEmail('');
        setConfirmPassword('');
        setCNIC('');


    }

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [cnic, setCNIC] = useState();



    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>

            <View>
                <Text style={styles.heading}>Register yourself to avail amazing cars! </Text>
            </View>

            <Input
                placeholder='Name'
                ContainerStyle={styles.inputbox}
                onChangeText={(name) => { setName(name) }}
                inputStyle={styles.inputtext}
            />
            <Input
                placeholder='Username'
                ContainerStyle={styles.inputbox}
                onChangeText={(username) => { setUsername(username) }}
                inputStyle={styles.inputtext}
            />
            <Input
                placeholder='Email'
                ContainerStyle={styles.inputbox}
                onChangeText={(email) => { setEmail(email) }}
                inputStyle={styles.inputtext}
            />
            <Input
                placeholder='CNIC'
                ContainerStyle={styles.inputbox}
                onChangeText={(cnic) => { setCNIC(cnic) }}
                inputStyle={styles.inputtext}
                keyboardType="numeric"
            />

            <Input
                placeholder='New Password'
                secureTextEntry={true}
                ContainerStyle={styles.inputbox}
                onChangeText={(password) => { setPassword(password) }}
                inputStyle={styles.inputtext}
            />
            <Input
                placeholder='Confirm Password'
                secureTextEntry={true}
                ContainerStyle={styles.inputbox}
                onChangeText={(repassword) => { setConfirmPassword(repassword) }}
                inputStyle={styles.inputtext}
            />



            <View style={styles.buttonContainer}>
                <Button
                    title="Register"
                    buttonStyle={styles.button}
                    onPress={() => writetoDatabase(name, username, password, email,cnic)} />
            </View>
            <View style={styles.innertextContainer}>
                <Text style={styles.linktext}>Already have an account!
                    <Text style={styles.innerlinktext}> Login</Text>
                </Text>
            </View>


        </ScrollView>

    );
}


const styles = StyleSheet.create({

    mainContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: 'black'
    },
    inputtext: {
        color: '#ffffff',

    },

    innertextContainer: {


        flexDirection: 'row-reverse',
        top: -18,
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
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#ffffff',
    }

});
export default Signup

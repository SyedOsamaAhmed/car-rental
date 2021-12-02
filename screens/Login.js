import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Input, Button} from 'react-native-elements';
const Login = () => {
    return (
        <View style={styles.maincontainer}>

        
     
        <View style={styles.footer}>

        <View style={styles.header}>
            <Text style={styles.heading}>Welcome</Text>
        </View>
       
            <Input
          placeholder="Enter email"
          ContainerStyle={styles.inputbox}
          inputStyle={styles.inputtext}
          
        />
            <Input
          placeholder="Enter Password"
          ContainerStyle={styles.inputbox}
          inputStyle={styles.inputtext}

        />
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            buttonStyle={styles.button}
           
          />
        </View>
        </View>


        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
      display: 'flex',
      flex: 1,
  
      backgroundColor: '#000000',
    },

    inputtext:{
        color: '#fff',
    },
    inputbox: {
        margin: 3,
      },
      footer: {
        flex: 3,
        justifyContent:'center',


       
      },
  
      buttonContainer: {
        flexDirection: 'row-reverse',
      },
    
      button: {
        width: '80%',
        borderRadius: 10,
      },

   
      heading:{
          fontSize:30,
          fontWeight:'bold',
          color:'#FFFFFF',
          margin:5
         
    
         
      },
      header:{
       
          justifyContent:'flex-end',
          top:-10,
         
         

          

      }
  });
export default Login

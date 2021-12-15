import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Login from './screens/Login';
import MainScreen from './screens/mainscreen';
import CarDetails from './screens/cardetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SignUp" component={Signup} options={{headerShown:false,}} /> */}
        {/*   <Stack.Screen name="Login" component={Login} options={{headerShown:false,}} /> */}
       {/*  <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="DetailsScreen"
          component={CarDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

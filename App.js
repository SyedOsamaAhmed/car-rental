import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SignUp" component={Signup} options={{headerShown:false,}} /> */}
        <Stack.Screen name="Login" component={Login} options={{headerShown:false,}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

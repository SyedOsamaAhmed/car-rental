
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Signup from './screens/Signup';

import {
  SafeAreaView,

  StyleSheet,
  Text,
 
  View,
} from 'react-native';





const App = () => {


  return (
    <SafeAreaProvider>
      <Signup />
    </SafeAreaProvider>
  );
};



export default App;

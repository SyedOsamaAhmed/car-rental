import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/mainscreen";
import Bookings from "./screens/bookingdetails";
import CarDetails from "./screens/cardetails";
import BookingDetails from "./screens/bookingconfirm";
import Signup from "./screens/Signup";
import Login from "./screens/Login";

import { DataProvider } from "./context/DataContext";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen
            name="SignUp"
            component={Signup}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Car Confirmation"
            component={CarDetails}
            options={{ headerShown: false }}
          
          />

          <Stack.Screen
            name="Details"
            component={Bookings}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Booking Confirmation"
            component={BookingDetails}
            options={{ headerShown: false }}
           
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;

import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Splash from './Screens/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Screens/Login';
import Registration from './Screens/Registration';
import FPemail from './Screens/FPemail';
import FPcode from './Screens/FPcode';
import SetPassword from './Screens/SetPassword';
import Header from './Components/Header';
import { TabNavigator } from './Components/TabNavigator';
import FPusername from './Screens/FPusername';
import Forgot_email from './Screens/Forgot_email';
import Forgot_code from './Screens/Forgot_code';
import Forgot_ResetPassword from './Screens/Forgot_ResetPassword';


const Stack = createNativeStackNavigator();


function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="FPemail" component={FPemail} />
      <Stack.Screen name="FPcode" component={FPcode} />
      <Stack.Screen name="FPusername" component={FPusername} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="Forgot_email" component={Forgot_email} />
      <Stack.Screen name="Forgot_code" component={Forgot_code} />
      <Stack.Screen name="Forgot_ResetPassword" component={Forgot_ResetPassword} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;

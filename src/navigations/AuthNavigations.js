import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUp from '../screens/auth/SiginUp';
import themes from '../styles/themes';
const AuthStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="LoginScreen">
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignUp"
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: themes.colors.transparent,
          },
        }}
        component={SignUp}
      />
    </AuthStack.Navigator>
  );
}
export default AuthNavigator;

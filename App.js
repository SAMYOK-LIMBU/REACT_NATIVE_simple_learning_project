import React from 'react';
import {SafeAreaView, useColorScheme, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigations'; // Ensure this path is correct

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#FFFF',
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.safeAreaView, backgroundStyle]}>
        <AuthNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1, // Ensure SafeAreaView takes up the full screen
  },
});

export default App;

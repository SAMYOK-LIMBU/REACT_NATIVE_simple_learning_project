import {Image, StyleSheet, Text, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import images from '../../../assets';
import CustomInput from '../../components/CustomInput';
import {ScaledSheet} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import themes from '../../styles/themes';

const LoginScreen = () => {
  const [username, setUsername] = useState(' ');
  const [password, setPassword] = useState(' ');
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={images.login} style={styles.imageStyle} />
      </View>
      <View style={styles.contaner}>
        <CustomInput
          placeholder="Enter your Name"
          value={username}
          setState={setUsername}
          iconName="email"
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setState={setPassword}
          secureTextEntry={true}
          iconName="lock"
        />
        <CustomButton text="Login" fontSize={themes.fontSize.heading} />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
const styles = ScaledSheet.create({
  root: {
    flexDirection: 'column',
    padding: '15@msr',
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contaner: {
    paddingTop: '15@msr',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageStyle: {
    height: '200@s',
    width: '200@s',
    borderRadius: 150,
  },
});

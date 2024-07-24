import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  ViewComponent,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import images from '../../../assets';
import CustomInput from '../../components/CustomInput';
import {scale, ScaledSheet} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import themes from '../../styles/themes';
import CustomCheckbox from '../../components/CustomCheckbox';
import LinkText from '../../components/LinkText';
import CustomText from '../../components/CustomText';
import Icon from 'react-native-vector-icons/AntDesign';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
        <View style={styles.forgotPasswordContainer}>
          <CustomCheckbox title="Remember me" />
          <LinkText
            text={'Forgot Password?'}
            fontWeight={'bold'}
            fontColor={themes.colors.primary}
            fontSize={themes.fontSize.insideText}
          />
        </View>
        <CustomButton text="Login" fontSize={themes.fontSize.heading} />
        <View style={styles.lowerContainer}>
          <LinkText
            text={'Create Account?'}
            fontWeight={'bold'}
            fontColor={themes.colors.black}
            fontSize={themes.fontSize.small}
          />
          <View style={{height: scale(10)}} />
          <CustomText
            text="Or Sign in With"
            fontSize={themes.fontSize.smaller}
          />
          <View style={styles.bottomContainer}>
            <TouchableOpacity>
              <Image
                source={images.googleLogo}
                style={styles.bottomIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={images.facebookLogo}
                style={styles.bottomIconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
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
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  lowerContainer: {
    paddingTop: scale(12),
    flexDirection: 'column',
    alignItems: 'center',
  },
  IconStyle: {
    height: 100,
    width: 100,
  },
  bottomIconStyle: {
    height: '40@s',
    width: '40@s',
    margin: '10@msr',
    borderRadius: 100,
  },
  bottomContainer: {
    margin: '8@msr',
    flexDirection: 'row',
  },
});

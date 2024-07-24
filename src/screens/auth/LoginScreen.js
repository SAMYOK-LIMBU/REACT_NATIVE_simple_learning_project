import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';

// Components
import images from '../../../assets';
import CustomButton from '../../components/CustomButton';
import themes from '../../styles/themes';
import CustomCheckbox from '../../components/CustomCheckbox';
import CustomText from '../../components/CustomText';
import CircularImages from '../../components/CircularImages';
import CustomInput from '../../components/CustomInput';

// Navigation
import {useNavigation} from '@react-navigation/native';
import LinkText from '../../components/LinkText';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isChecked, setChecked] = useState(false);

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = password => password.length >= 6;

  const handleInputChange = (setter, validator, key, value) => {
    setter(value);
    if (errors[key] && validator(value)) {
      setErrors(prevErrors => {
        const newErrors = {...prevErrors};
        delete newErrors[key];
        return newErrors;
      });
    }
  };

  const validateInput = () => {
    const newErrors = {};

    if (!validateEmail(username)) {
      newErrors.email = 'Enter valid Email.';
      if (username === 'admin@gmail.com') {
        newErrors.email = 'This email is not registered';
      }
    }
    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters.';
      if (password === 'admin123') {
        newErrors.password = 'Password Incorrect';
      }
    }

    if (Object.keys(newErrors).length === 0) {
      console.warn('Form submitted successfully');
    } else {
      setErrors(newErrors);
    }
  };

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={images.login} style={styles.imageStyle} />
      </View>
      <View style={styles.container}>
        <CustomInput
          placeholder="Email"
          value={username}
          setState={value =>
            handleInputChange(setUsername, validateEmail, 'email', value)
          }
          iconName="envelope"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <CustomInput
          placeholder="Password"
          value={password}
          setState={value =>
            handleInputChange(setPassword, validatePassword, 'password', value)
          }
          secureTextEntry={true}
          iconName="lock"
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <View style={styles.forgotPasswordContainer}>
          <CustomCheckbox
            title="Remember me"
            isChecked={isChecked}
            setChecked={setChecked}
          />
          <LinkText
            text="Forgot Password?"
            fontWeight="bold"
            fontSize={themes.fontSize.insideText}
          />
        </View>

        <CustomButton
          text="Login"
          fontSize={themes.fontSize.larger}
          onPress={validateInput}
        />

        <View style={styles.lowerContainer}>
          <LinkText
            text="Create Account?"
            fontWeight="bold"
            fontColor={themes.colors.black}
            fontSize={themes.fontSize.small}
            onPress={() => navigation.navigate('SignUp')}
          />

          <View style={{height: scale(10)}} />
          <CustomText
            text="Or Sign in With"
            fontSize={themes.fontSize.smaller}
          />
          <View style={styles.bottomContainer}>
            <CircularImages imageSource={images.googleLogo} />
            <CircularImages imageSource={images.facebookLogo} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = ScaledSheet.create({
  root: {
    flexGrow: 1,
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
  container: {
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
  errorText: {
    marginTop: scale(3),
    color: themes.colors.red,
    fontSize: themes.fontSize.small,
  },
  bottomContainer: {
    margin: '8@msr',
    flexDirection: 'row',
  },
});

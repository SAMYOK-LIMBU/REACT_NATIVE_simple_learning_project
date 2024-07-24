import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../components/CustomText';
import themes from '../../styles/themes';
import {scale, ScaledSheet} from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomCheckbox from '../../components/CustomCheckbox';
import CircularImages from '../../components/CircularImages';
import images from '../../../assets';
import LinkText from '../../components/LinkText';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isChecked, setChecked] = useState(false);

  const validateFullName = fullName => fullName.trim().length > 0;
  const validatePhone = phone => phone.trim().length === 10;
  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = password => password.length >= 6;
  const validateConfirmPassword = (password, confirmPassword) =>
    password === confirmPassword;

  const validateInput = () => {
    const newErrors = {};

    if (!validateFullName(fullName)) {
      newErrors.fullName = 'Full name is required.';
    }
    if (!validatePhone(phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }
    if (!validateEmail(email)) {
      newErrors.email = 'Enter valid Email.';
    }
    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    if (!validateConfirmPassword(password, confirmPassword)) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    if (!isChecked) {
      newErrors.isChecked = 'You must agree to the terms and conditions.';
    }
    if (Object.keys(newErrors).length === 0) {
      console.warn('Form submitted successfully');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.container}>
        <View style={{margin: scale(5)}}>
          <CustomText
            text={'Create an Account'}
            fontWeight="bold"
            fontSize={themes.fontSize.large}
          />
        </View>

        <View style={styles.inputContainer}>
          <CustomInput
            placeholder="Full Name"
            value={fullName}
            setState={setFullName}
            iconName={'user'}
          />
          {errors.fullName && (
            <Text style={styles.errorText}>{errors.fullName}</Text>
          )}
          <CustomInput
            placeholder="Phone"
            value={phone}
            setState={setPhone}
            iconName={'phone'}
          />
          {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
          <CustomInput
            placeholder="Email"
            value={email}
            setState={setEmail}
            iconName={'envelope'}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <CustomInput
            placeholder="Password"
            value={password}
            setState={setPassword}
            iconName={'lock'}
            secureTextEntry={true}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <CustomInput
            placeholder="Confirm Password"
            value={confirmPassword}
            setState={setConfirmPassword}
            iconName={'lock'}
            secureTextEntry={true}
          />
          {errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}
        </View>
        <View>
          <View style={{height: scale(20)}} />

          <CustomButton
            onPress={validateInput}
            text={'Create Account'}
            fontSize={themes.fontSize.larger}
          />
          <View style={styles.conditions}>
            <CustomCheckbox
              title="I agree to the"
              isChecked={isChecked}
              setChecked={setChecked}
              boxSize={scale(15)}
              fontSize={themes.fontSize.small}
            />
            <LinkText
              text={'Terms and Conditions.'}
              textDecorationLine="underline"
              fontSize={themes.fontSize.small}
              fontColor={themes.colors.blue}
            />
          </View>
          {errors.isChecked && (
            <Text style={styles.errorText}>{errors.isChecked}</Text>
          )}
        </View>

        <View style={styles.lowerContainer}>
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

export default SignUp;

const styles = ScaledSheet.create({
  root: {
    flexGrow: 1, // Allow content to grow and be scrollable
  },
  container: {
    padding: '10@msr',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  conditions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lowerContainer: {
    paddingTop: scale(12),
    flexDirection: 'column',
    alignItems: 'center',
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

import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import themes from '../styles/themes';
import Icon from 'react-native-vector-icons/FontAwesome5';

const {height, width} = Dimensions.get('screen');
const iconSize = width * 0.06;

const CustomInput = ({
  value,
  setState,
  placeholder,
  secureTextEntry = false,
  iconName,
}) => {
  // Initialize visibility state based on secureTextEntry
  const [IsPasswordVissible, SetPasswordVissible] = useState(!secureTextEntry);

  const OnVisibilityChange = () => {
    SetPasswordVissible(!IsPasswordVissible);
  };

  return (
    <View
      style={
        placeholder === 'Password'
          ? styles.forPasswordContainer
          : styles.container
      }>
      <Icon
        name={iconName}
        size={iconSize}
        color={themes.colors.primary}
        style={styles.iconStyle}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={setState}
        secureTextEntry={secureTextEntry && !IsPasswordVissible}
      />
      {(placeholder === 'Password' || placeholder === 'Confirm Password') && (
        <TouchableOpacity onPress={OnVisibilityChange}>
          <Icon
            name={IsPasswordVissible ? 'eye' : 'eye-slash'}
            style={styles.iconStyle}
            size={iconSize}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 2,
    borderRadius: '10@msr',
    alignItems: 'center',
    marginTop: width * 0.05,
    height: '48@s',
    borderColor: themes.colors.primary,
  },
  forPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: '10@msr',
    alignItems: 'center',
    marginTop: width * 0.05,
    height: '48@s',
    borderColor: themes.colors.primary,
  },
  inputStyle: {
    paddingHorizontal: '5@msr',
    fontSize: '16@msr',
    paddingTop: '10@msr',
    width: '75%',
  },
  iconStyle: {
    color: themes.colors.primary,
    marginRight: '10@msr',
    marginLeft: '10@msr',
  },
});

import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import themes from '../styles/themes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {height, width} = Dimensions.get('screen');
const iconSize = width * 0.07;
const CustomInput = ({
  value,
  setState,
  placeholder,
  secureTextEntry,
  iconName,
}) => {
  const [IsPasswordVissible, SetPasswordVissible] = useState(secureTextEntry);
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
      <MaterialIcons
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
        secureTextEntry={IsPasswordVissible}
      />
      {placeholder === 'Password' && (
        <TouchableOpacity onPress={OnVisibilityChange}>
          <MaterialIcons
            name={IsPasswordVissible ? 'visibility' : 'visibility-off'}
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
    marginRight: '5@msr',
    marginLeft: '5@msr',
  },
});

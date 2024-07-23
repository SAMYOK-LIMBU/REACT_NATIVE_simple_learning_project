import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import themes from '../styles/themes';
const {width} = Dimensions.get('screen');
const CustomButton = ({text, fontSize, backgroundColor, color}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor || themes.colors.primary},
      ]}>
      <Text style={[{fontSize: fontSize, color: color || themes.colors.white}]}>
        {text}
      </Text>
    </View>
  );
};
export default CustomButton;
const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10@msr',
    marginTop: width * 0.05,
    height: '48@s',
  },
});

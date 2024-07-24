import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import themes from '../styles/themes';

const CustomText = ({
  text,
  color = themes.colors.black,
  fontWeight = 'normal',
  fontSize = themes.fontSize.insideText,
}) => {
  return (
    <View>
      <Text style={{color: color, fontWeight: fontWeight, fontSize: fontSize}}>
        {text}
      </Text>
    </View>
  );
};

export default CustomText;

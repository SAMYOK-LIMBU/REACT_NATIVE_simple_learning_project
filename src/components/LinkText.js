import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import themes from '../styles/themes';

const LinkText = ({
  text,
  fontColor = themes.colors.primary,
  fontWeight,
  fontSize,
  onPress,
  textDecorationLine = '',
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          textDecorationLine: textDecorationLine,
          color: fontColor,
          fontSize: fontSize,
          fontWeight: fontWeight || 'normal',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkText;

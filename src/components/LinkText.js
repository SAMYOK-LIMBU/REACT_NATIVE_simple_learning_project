import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {color} from 'react-native-elements/dist/helpers';
import themes from '../styles/themes';

const LinkText = ({
  text,
  fontColor = themes.colors.primary,
  fontWeight,
  fontSize,
}) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
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

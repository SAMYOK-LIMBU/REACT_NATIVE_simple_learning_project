import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import themes from '../styles/themes';
import {scale} from 'react-native-size-matters';

const CustomCheckbox = ({
  title = 'Check Box',
  fontSize = themes.fontSize.insideText,
  boxSize = scale(25),
  isChecked = false,
  setChecked,
}) => {
  return (
    <View>
      <CheckBox
        title={title}
        checked={isChecked}
        setChecked={setChecked}
        onPress={() => setChecked(!isChecked)}
        textStyle={[styles.fontStyles, {fontSize: fontSize}]}
        containerStyle={[styles.checkBoxStyle]}
        checkedColor={themes.colors.primary}
        uncheckedColor={themes.colors.grey}
        size={boxSize}
      />
    </View>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  checkBoxStyle: {
    marginLeft: 0,
    paddingLeft: 0,
    color: themes.colors.primary,
    backgroundColor: themes.colors.transparent,
  },
  fontStyles: {
    color: themes.colors.black,
    marginRight: 0,
  },
});

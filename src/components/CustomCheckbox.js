import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import themes from '../styles/themes';

const CustomCheckbox = ({title = 'Check Box'}) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View>
      <CheckBox
        title={title}
        checked={isChecked}
        onPress={() => setChecked(!isChecked)}
        textStyle={styles.fontStyles}
        containerStyle={styles.checkBoxStyle}
        checkedColor={themes.colors.primary}
        uncheckedColor={themes.colors.grey}
        size={25}
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
    fontSize: themes.fontSize.insideText,
    color: themes.colors.black,
  },
});

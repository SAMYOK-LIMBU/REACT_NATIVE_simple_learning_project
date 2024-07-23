import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-elements';

const CustomCheckbox = title => {
  return (
    <View>
      <CheckBox title={title} />
    </View>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({});

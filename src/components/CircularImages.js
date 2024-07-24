import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';

const CircularImages = ({imageSource}) => {
  return (
    <TouchableOpacity>
      <Image source={imageSource} style={styles.bottomIconStyle} />
    </TouchableOpacity>
  );
};

export default CircularImages;

const styles = ScaledSheet.create({
  bottomIconStyle: {
    height: '40@s',
    width: '40@s',
    margin: '10@msr',
    borderRadius: '20@s', // half of the height/width to make it circular
  },
});

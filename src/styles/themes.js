import {transformer} from '../../metro.config';
import {scale} from 'react-native-size-matters';
const colors = {
  primary: '#30336B',
  white: '#ffffff',
  transparent: 'transparent',
  grey: 'grey',
  black: 'black',
};
const fontSize = {
  heading: scale(24),
  large: scale(18),
  larger: scale(20),
  insideText: scale(16),
  small: scale(14),
  smaller: scale(12),
};

export default {colors, fontSize};

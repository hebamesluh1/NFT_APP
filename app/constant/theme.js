import {PixelRatio} from 'react-native';

const fontScale = PixelRatio.getFontScale();

export const SIZES = {
  small: 9 * fontScale,
  medium: 14 * fontScale,
  large: 18 * fontScale,
  xLarge: 24 * fontScale,
};

export const COLORS = {
  BG: '#111827',
  cardBG: '#1F2937',
  second: '#4F46E5',
  white: '#FFF',
  black: '#000',
  gray: '#ddd',
};

export const FONTS ={
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
}

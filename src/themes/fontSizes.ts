const fontSizes = [12, 14, 16, 20, 24, 32] as const;

export default {
  extraSmall: fontSizes[0],
  small: fontSizes[1],
  medium: fontSizes[2],
  mediumLarge: fontSizes[3],
  large: fontSizes[4],
  extraLarge: fontSizes[5],
  ...fontSizes,
};


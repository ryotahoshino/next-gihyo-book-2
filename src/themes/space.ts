const space = ['0px', '8px', '16px', '32px', '64px'] as const;

export default {
  small: space[1],
  medium: space[2],
  large: space[3],
  ...space,
};


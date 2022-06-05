enum Options {
  PRIMARY = 'primary',
  BLUE = 'blue',
  BLUE2 = 'blue2',
  WHITE = 'white',
  GREEN = 'green',
  GREEN2 = 'green2',
  PURPLE = 'purple',
  PURPLE2 = 'purple2',
  PURPLE3 = 'purple3',
  BLACK = 'black',
  RED = 'red',
  YELLOW = 'yellow',
  GRAY = 'gray',
}
type ColorPalette = {
  [key in Options]: string;
};

export const Colors: ColorPalette = {
  primary: '#3a3b3c',
  blue: '#1877f2',
  blue2: '#48add9',
  white: '#ffffff',
  green: '#49c5a1',
  green2: '#42bd6a',
  purple: '#ad46d7',
  purple2: '#df5289',
  purple3: '#81a2fd',
  black: '#000000',
  red: '#f65a6a',
  yellow: '#fdbf44',
  gray: '#a3a4a6',
};

// export const DARK_THEME_COLOR_PALETTE: ColorPalette = {
// };

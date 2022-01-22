const GREY = {
  0: '#FFFFFF',
  200: '#C4CDD5',
  400: '#637381',
  600: '#212B36',
};

const PRIMARY = {
  light: '#ffc4a0',
  main: '#FE9544',
  dark: '#FE6f44',
};
const SECONDARY = {
  light: '#D0D7f7',
  main: '#3366FF',
  dark: '#091A7A',
};
const INFO = {
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#04297A',
};
const SUCCESS = {
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#08660D',
};
const WARNING = {
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#7A4F01',
};
const ERROR = {
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#7A0C2E',
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  divider: GREY[400],
  text: { primary: GREY[600], secondary: GREY[400], disabled: GREY[200] },
  background: {
    paper: '#fff',
    default: '#fafafa',
    hover: '#FFEBDF',
  },
};

export default palette;

import { useTheme } from '@mui/material/styles';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        body: {
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        '::selection': {
          background: '#FFEBDF',
        },
        '::-moz-selection': {
          background: '#FFEBDF',
        },
        '::-webkit-selection': {
          background: '#FFEBDF',
        },
        a: {
          textDecoration: 'none',
          color: 'unset',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        textarea: {
          '&::-webkit-input-placeholder': {
            color: theme.palette.text.disabled,
          },
          '&::-moz-placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
          '&:-ms-input-placeholder': {
            color: theme.palette.text.disabled,
          },
          '&::placeholder': {
            color: theme.palette.text.disabled,
          },
        },
        '::-webkit-scrollbar-track': {
          WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
          borderRadius: '10px',
          backgroundColor: '#F5F5F5',
        },
        '::-webkit-scrollbar': {
          width: '10px',
          backgroundColor: '#F5F5F5',
        },

        '::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
          backgroundColor: '#ffc4a0',
        },
      }}
    />
  );
};
export default GlobalStyles;

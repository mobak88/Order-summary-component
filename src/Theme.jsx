import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    paleBlue: 'hsl(225, 100%, 94%)',
    brightBlue: 'hsl(245, 75%, 52%)',
    veryPaleBlue: 'hsl(225, 100%, 98%)',
    desaturatedBlue: 'hsl(224, 23%, 55%)',
    darkBlue: 'hsl(223, 47%, 23%)',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

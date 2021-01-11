import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme ={
    color:{
        primary: 'pink',
        secondary: 'purple',
        light: 'white',
    }
};


const Theme = ({ children }) => (
    <ThemeProvider theme={ theme }>
        {children}
    </ThemeProvider>
  );

export default Theme;
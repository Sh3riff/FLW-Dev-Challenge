import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme ={
    color:{
        primary: '#C8A2C8',
        secondary: '#800080',
        light: '#FFFFFF',
    }
};


const Theme = ({ children }) => (
    <ThemeProvider theme={ theme }>
        {children}
    </ThemeProvider>
  );

export default Theme;
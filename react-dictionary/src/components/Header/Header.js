import React from 'react';
import './Header.css'
import TextField from '@material-ui/core/TextField';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
const Header = () => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
          type: 'dark',
        },
      });
    return (
        <div className="header">
            <span className="title">
        React Dictionary
            </span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                <TextField id="standard-basic" label="Standard" />
                </ThemeProvider>
            </div>
        </div>

    );
};
export default Header;
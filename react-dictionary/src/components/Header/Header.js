import React from 'react';
import './Header.css'
import TextField from '@material-ui/core/TextField';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import categories from '../../data/category';
const Header = (props) => {
    const handleChange = (language) => {
        props.setCategory(language);
        props.setWord('');
    }
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
                {props.word ? props.word : 'React Dictionary'}
            </span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField   className="search" id="standard-basic" label="Search a Word" 
                    value={props.word}
                    onChange={(e) => props.setWord(e.target.value)}
                    />
                    <Select
                        className="select"
                        label="Language"
                        id="demo-simple-select"
                        value={props.category}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            ))
                        }
                    </Select>
                </ThemeProvider>

            </div>
        </div>

    );
};
export default Header;
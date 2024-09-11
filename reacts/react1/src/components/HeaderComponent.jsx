import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const HeaderComponent = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const theme = {
        backgroundColor: darkMode ? "black": "white",
        color: darkMode ? "white":"black",
    };
    return (
        <div className='header' style={theme}>
            Header
            {
                darkMode ? (<button className="toggleBtn" onClick={toggleDarkMode}> z
                </button> )
                :(
                    <button className="toggleBtn" onClick={toggleDarkMode}>
                        h
                    </button> )
            }
        </div>
    );
};

export default HeaderComponent;
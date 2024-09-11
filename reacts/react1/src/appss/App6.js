import React, { useState } from 'react';
// import HomeComponent from './components/HomeComponent';
// import { ThemeContext } from './components/ThemeContext';
import ColorBox from "./components/ColorBox"
import { ColorProvider } from './components/ColorContext';
// function App(){
//     const [darkMode, setDarkMode] = useState(false);

//     return(
//         <ThemeContext.Provider value = {{darkMode, setDarkMode}}>
//             <HomeComponent />
//         </ThemeContext.Provider>    );
// }

function App(){
    return (
        <ColorProvider>
        <ColorBox/>
        </ColorProvider>
    );
}

export default App;
import "./HomeComponent.scss";
import React, { useContext } from 'react'; // 중복된 useState 대신 useContext 사용
import "./HomeComponent.scss";
import MainComponent from './MainComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import { ThemeContext } from './ThemeContext'; // ThemeContext 임포트 추가

const HomeComponent = () => {
    const data = useContext(ThemeContext);
    console.log(data);
    
    return (
        <div className = "container">
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    );
};

export default HomeComponent;
import React from 'react';
import Menu from '../pages/Menu';
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <div>
        <Menu />
        <Outlet />
        </div>
    );
};

export default Root;
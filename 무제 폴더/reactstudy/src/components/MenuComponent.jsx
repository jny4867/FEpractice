import React from 'react';
// import "./FoodMenu.css";

function MenuComponent (props) {
    const {imgs, alts, name, menu, price} = props; //구조분해할당
    return (
        <div>
            <div style={{backgroundColor:'lightyellow', width:'300px' ,height: '500px', margin:"20px" ,padding: "10px", alignItems:"center"}}>
                <ul>
                <img src={imgs} alt= {alts} style = {{width: "200px", height: "200px"}}></img>
                    <h1>{name}</h1>
                    <h2>{menu}</h2>
                    <h3>{price}</h3>
                </ul>

            </div>
            
        </div>
    );
};

export default MenuComponent;
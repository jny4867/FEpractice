import React from 'react';

function BooleanComponent({study}){
    const massage = study ? "Study Today" : "Play Tomorrow"
    return (
        <div>{massage}</div>
    );
};

export default BooleanComponent;
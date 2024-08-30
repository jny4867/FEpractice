import React from 'react';

function PriceListComponent(props){
    const {prices} = props;
    return (
        <div>
            <h2>가격:{prices}원</h2>
        </div>
    )
};

export default PriceListComponent;
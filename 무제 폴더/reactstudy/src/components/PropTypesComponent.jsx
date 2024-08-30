import React from 'react';
import PropTypes from 'prop-types';

function PropTypesComponent({item, price}) {
    return (
        <div>
            아이템: {item}<br />
            가격: {price} 원
        </div>
    );
};

// 부모는 item으로 number를 전달하지만, 자식은 item으로 string을 원함
PropTypesComponent.propTypes = {
    item: PropTypes.string,      // item은 문자열이어야 함
    price: PropTypes.number.isRequired // price는 필수이며, 숫자여야 함
};

export default PropTypesComponent;
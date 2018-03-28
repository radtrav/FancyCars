import React from 'react';

const style = {
  fontSize: 14,
  fontWeight: 400,
  marginRight: 20,
  color: 'grey',
};

const CarProperty = ({ label, property }) => (
  <span style={style}>
    {label}: {property}
  </span>
);

export default CarProperty;

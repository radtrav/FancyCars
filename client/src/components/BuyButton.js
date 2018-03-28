import React from 'react';

const BuyButton = ({ available }) => (
  <div style={{ marginTop: 20 }}>
    {available === 'In Dealership' ? (
      <button className="btn">BUY</button>
    ) : (
      <button className="waves-effect grey btn">{available}</button>
    )}
  </div>
);

export default BuyButton;

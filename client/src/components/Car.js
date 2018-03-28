import React from 'react';
import BuyButton from './BuyButton';
import CarProperty from './CarProperty';

const styles = {
  image: {
    backgroundColor: 'lightgrey',
    margin: 15,
    maxHeight: '100%',
    maxWidth: '100%',
    minWidth: '100%',
  },
  imageWrapper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
  },
  wrapper: {
    margin: 0,
  },
};

const Car = ({ car }) => (
  <div style={styles.wrapper} className="card row" key={car.id}>
    <div style={styles.imageWrapper} className="col m4 center-align">
      <img src={car.img} style={styles.image} alt="" />
    </div>
    <div className="col m8 card-content">
      <span className="card-title">
        <div style={styles.name}>{car.name}</div>
        <CarProperty label="Make" property={car.make} />
        <CarProperty label="Model" property={car.model} />
        <CarProperty label="Year" property={car.year} />
        <CarProperty label="Availability" property={car.available} />
      </span>
      <hr />
      <BuyButton available={car.available} />
    </div>
  </div>
);

export default Car;

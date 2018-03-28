import React from 'react';

const styles = {
  buyButton: {
    marginTop: 20,
  },
  image: {
    margin: 15,
    backgroundColor: 'lightgrey',
    height: 150,
    width: 200,
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
  },
  make: {
    fontSize: 14,
    fontWeight: 400,
    marginRight: 20,
    color: 'grey',
  },
};

const Car = ({ car }) => (
  <div style={{ padding: 0 }} key={car.id} className="card darken- 1">
    <div className="row">
      <div
        style={styles.imageWrapper}
        className="col s4 center-align valign-wrapper"
      >
        <img src={car.img} style={styles.image} alt="" />
      </div>
      <div className="col s8 card-content">
        <span className="card-title">
          <div style={styles.name}>{car.name}</div>
          <span style={styles.make}> Make: {car.make}</span>
          <span style={styles.make}> Model: {car.model}</span>
          <span style={styles.make}> Year: {car.year}</span>
          <span style={styles.make}> Availability: {car.available}</span>
        </span>
        <hr />
        <div style={styles.buyButton}>
          {car.available === 'In Dealership' && (
            <button className="waves-effect waves-light btn">BUY</button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Car;

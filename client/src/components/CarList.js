import React from 'react';
import Car from './Car';
import { connect } from 'react-redux';

const sortBy = (cars, sortType) => {
  return cars.sort((a, b) => a[sortType] > b[sortType]);
};

const CarList = ({ cars, sort }) => {
  console.log('cars and sort', cars, sort );
  return (
    <div>
      {cars.length ? (
        cars.map(car => <Car key={car.id} car={car} />)
      ) : (
        <div className="center">Loading ...</div>
      )}
    </div>
  );
};
const mapStateToProps = ({ cars, sort }) => ({
  cars: sortBy(cars, sort),
  sort,
});

export default connect(mapStateToProps)(CarList);

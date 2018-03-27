import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCars } from '../../actions';

class CarList extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }
  renderCars() {
    if (!this.props.cars.length) {
      return <div className="center">Loading ...</div>;
    }
    return this.props.cars.reverse().map(car => {
      return (
        <div style={{ padding: 0 }} key={car.id} className="card darken- 1">
          <div className="row">
            <div className="col s4">
              <img
                src={car.img}
                style={{
                  height: 150,
                  width: 200,
                  backgroundColor: 'lightgrey',
                }}
                alt=""
              />
            </div>
            <div className="col s8 card-content">
              <span style={{ fontWeight: 600 }} className="card-title">
                <div> {car.make}</div>
                <div> {car.name}</div>
                <div> {car.model}</div>
                <div> Availability: {car.available} </div>
              </span>
              <hr />
              <p>{car.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div
          className="center"
          style={{
            fontSize: 40,
            marginBottom: 20,
            marginTop: 20,
            fontWeight: 600,
          }}
        >
          Cars
        </div>
        <hr />
        {this.renderCars()}
      </div>
    );
  }
}

const mapStateToProps = ({ cars }) => ({
  cars,
});

export default connect(mapStateToProps, { fetchCars })(CarList);

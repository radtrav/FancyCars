import React, { Component } from 'react';
import Car from './Car';
import { connect } from 'react-redux';

import { fetchCars } from '../actions/index';

class CarList extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }
  renderCars() {
    if (!this.props.cars.length) {
      return <div className="center">Loading ...</div>;
    }
    return this.props.cars.reverse().map(car => <Car car={car} />
    );
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

const mapStateToProps = ({ cars }) => ({ cars });

export default connect(mapStateToProps, { fetchCars })(CarList);

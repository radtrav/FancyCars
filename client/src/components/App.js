import React, { Component } from 'react';
import CarList from './CarList';
import Header from './Header';
import SortBy from './SortBy';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = {
  main: {
    marginBottom: 0,
    padding: 20,
  },
};

class App extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    return [
      <Header key="header" />,
      <div className="row" key="main" style={styles.main}>
        <SortBy />
        <CarList cars={this.props.cars} />
      </div>,
    ];
  }
}

export default connect(null, actions)(App);

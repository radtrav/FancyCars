import React, { Component } from 'react';
import CarList from './CarList';
import Header from './Header';
import SortBy from './SortBy';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
    minHeight: 'calc(100vh - 132px)',
  },
};

class App extends Component {
  componentDidMount() {
    console.log('mounted');
    this.props.fetchCars();
  }

  render() {

    console.log('render cars', this.props.cars);
    return (
      <div style={styles.container}>
        <Header />
        <div style={{ padding: 40 }} className="row">
          <div className="col s3">
            <SortBy />
          </div>
          <div
            style={{ height: 'calc(100vh - 160px)', overflowY: 'auto' }}
            className="col s9"
          >
            <CarList cars={this.props.cars} />
          </div>
        </div>
      </div>
    );
  }
}



export default connect(null, actions)(App);

import React, { Component } from 'react';
import CarList from './CarList';
import Header from './Header';
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
    //this.props.fetchUser();
  }

  render() {
    return (
      <div style={styles.container}>
        <Header />
        <div style={{padding: 30}} class="row">
          <div class="col s3">
            <div style={{ marginTop: 50, height: 200 }} class="card">
              Filter Filter Filter Filter Filter Filter Filter
            </div>
          </div>
          <div
            style={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}
            class="col s9"
          >
            <CarList />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);

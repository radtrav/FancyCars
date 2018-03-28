import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SortBy extends Component {
  render() {
    return (
      <div style={{ height: 200 }} className="card">
        <button onClick={() => this.props.sortByAvailability()}>Sort By Availability</button>
        <button onClick={() => this.props.sortByName()}> Sort By Name</button>
        <button onClick={() => this.props.sortByYear()}> Sort By Year</button>
        <button onClick={() => this.props.sortByMake()}> Sort By Make</button>
      </div>
    );
  }
}

const mapDispatchToProps = () => ({});

export default connect(null, actions)(SortBy);

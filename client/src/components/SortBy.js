import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = {
  button: {
    height: 60,
    width: '100%',
  },
};

class SortBy extends Component {
  render() {
    return (
      <div style={{ height: 200 }} className="card">
        <div>
          <button
            style={styles.button}
            onClick={() => this.props.sortBy('available')}
          >
            Sort By Availability
          </button>
        </div>
        <div>
          <button
            style={styles.button}
            onClick={() => this.props.sortBy('name')}
          >
            Sort By Name
          </button>
        </div>
        <div>
          <button
            style={styles.button}
            onClick={() => this.props.sortBy('year')}
          >
            Sort By Year
          </button>
        </div>
        <div>
          <button
            style={styles.button}
            onClick={() => this.props.sortBy('make')}
          >
            Sort By Make
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SortBy);

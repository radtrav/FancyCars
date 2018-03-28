import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = {
  button: {
    height: 35,
    width: '100%',
  },
};

const SortButton = ({sortType, sortBy}) => (
  <div className="s3 m12">
    <button
      style={styles.button}
      onClick={() => sortBy(sortType)}
    >
      Sort by {sortType}
    </button>
  </div>
);

export default connect(null, actions)(SortButton);

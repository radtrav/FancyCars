import React from 'react';
import SortButton from './SortButton';

const styles = {
  wrapper: {
    fontWeight: 500,
    marginBottom: 20,
    minWidth: '100%',
  },
};

const SortBy = () => (
  <div className="col s12 m3">
  <div style={styles.wrapper}>
    <SortButton sortType="available" />
    <SortButton sortType="name" />
    <SortButton sortType="make" />
    <SortButton sortType="year" />
  </div>
  </div>
);

export default SortBy;

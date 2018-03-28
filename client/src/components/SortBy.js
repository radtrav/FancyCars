import React from 'react';
import SortButton from './SortButton';

const styles = {
  wrapper: {
    marginBottom: 40,
    minWidth: '100%',
  },
};

const SortBy = () => (
  <div style={styles.wrapper} className="card">
    <SortButton sortType="available" />
    <SortButton sortType="name" />
    <SortButton sortType="make" />
    <SortButton sortType="year" />
  </div>
);

export default SortBy;

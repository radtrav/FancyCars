import React from 'react';

const styles = {
  logo: {
    fontFamily: 'helvetica',
    fontSize: 26,
    fontWeight: 600,
  },
  navWrapper: {
    height: 80,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
  },
};

const Header = () => (
  <nav style={styles.navWrapper} className="nav-wrapper teal darken-4">
    <div style={styles.logo}>FANCY CARS </div>
  </nav>
);

export default Header;

import React, { Component } from 'react';

const styles = {
  navWrapper: {
    height: 80,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
  },
  icon: {
    color: 'teal',
    fontSize: 56,
  },
};

class Header extends Component {
  renderContent() {
    return [
      <li key="4">
        <a href="/">Home</a>
      </li>
    ];
  }

  render() {
    return (
      <nav className="navbar-fixed">
        <div style={styles.navWrapper} className="nav-wrapper black">
          <div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

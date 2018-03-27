import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    //this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container" style={{minHeight: 'calc(100vh - 132px)'}}>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/cars" component={Dashboard} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import PortfolioPage from '../PortfolioPage/PortfolioPage';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <PortfolioPage />
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);

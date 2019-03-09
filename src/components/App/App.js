import React, { Component } from 'react';
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



export default App;

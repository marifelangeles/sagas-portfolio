import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import AdminPage from '../AdminPage/AdminPage';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={PortfolioPage} />
            <Route exact path="/admin" component={AdminPage} />
        </div>
      </Router>
    );
  }
}



export default App;

import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Header from '../Header/Header';
class App extends Component {

  componentDidMount() {
    this.getprojectlist();
  }

  getprojectlist = () => {
    this.props.dispatch({ type: 'FETCH_PROJECTS'});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <pre>{JSON.stringify(this.props.reduxState.projects)}</pre>
        <ul>
          {this.props.reduxState.projects.map( project => 
            <li>{project.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);

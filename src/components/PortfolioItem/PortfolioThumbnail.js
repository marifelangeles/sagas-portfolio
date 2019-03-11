import React, { Component } from 'react';
import { connect } from 'react-redux';
import coming_soon from '../images/coming_soon.jpg';

class PortfolioThumnbnail extends Component {

    render() {

        return (
            <img src={coming_soon} alt="project coming soon"/>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PortfolioThumnbnail);

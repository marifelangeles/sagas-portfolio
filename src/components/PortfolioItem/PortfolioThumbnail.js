import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import coming_soon from '../images/coming_soon.jpg';

class PortfolioThumnbnail extends Component {

    render() {

        return (
            <Grid item sm={12} md={8}>
                <img src={coming_soon} alt="project coming soon"/>
            </Grid>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PortfolioThumnbnail);

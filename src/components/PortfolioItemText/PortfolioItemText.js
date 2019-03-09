import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';


class PortfolioItemText extends Component {

    render() {

        return (
            <Grid container>
                <Grid item sm={12}>
                    <div>{this.props.project.name}</div>
                </Grid>
                <Grid item sm={6}>
                    <div>{this.props.project.github}</div>
                </Grid>
                <Grid item sm={6}>
                    <div>{this.props.project.website}</div>
                </Grid>
                <Grid item sm={12}>
                    <div>{this.props.project.description}</div>
                </Grid>
            </Grid>      
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PortfolioItemText);

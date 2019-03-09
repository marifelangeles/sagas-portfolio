import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Paper, Grid} from '@material-ui/core';


class PortfolioItem extends Component {

    render() {
        console.log('props', this.props.project);
        
        return (
            <Paper >
                <Grid container spacing={16}>
                    <Grid item sm={8}>
                        <div>{this.props.project.thumbnail}</div>
                    </Grid>
                    <Grid item sm={4}>
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
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PortfolioItem);

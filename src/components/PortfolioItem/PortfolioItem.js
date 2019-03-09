import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Paper, Grid} from '@material-ui/core';
import PortfolioItemText from '../PortfolioItemText/PortfolioItemText';


class PortfolioItem extends Component {

    render() {
        // console.log('props', this.props.project);
        
        return (
            <Paper >
                <Grid container spacing={16}>
                    <Grid item sm={8}>
                        <div>{this.props.project.thumbnail}</div>
                    </Grid>
                    <Grid item sm={4}>
                        <PortfolioItemText project={this.props.project}/>
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

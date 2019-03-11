import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Paper, Grid} from '@material-ui/core';
import PortfolioItemText from '../PortfolioItemText/PortfolioItemText';
import PortfolioThumbnail from './PortfolioThumbnail';


class PortfolioItem extends Component {

    render() {
        
        return (
            <Paper >
                <Grid container spacing={0}>
                    <Grid item xs={12} md={8}>
                        <PortfolioThumbnail />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container >
                                <PortfolioItemText project={this.props.project}/>
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

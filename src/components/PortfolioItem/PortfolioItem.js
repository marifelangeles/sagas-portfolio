import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Paper, Grid} from '@material-ui/core';
import PortfolioItemText from '../PortfolioItemText/PortfolioItemText';
import PortfolioThumbnail from './PortfolioThumbnail';


class PortfolioItem extends Component {

    render() {
        // console.log('props', this.props.project);
        
        return (
            <Paper >
                <Grid container spacing={0}>
                    <PortfolioThumbnail />
                    <Grid item sm={12} md={4}>
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

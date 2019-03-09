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
                    <div><a href={this.props.project.github} target="_blank" rel="noopener noreferrer">Github</a></div>
                </Grid>
                <Grid item sm={6}>
                    <div><a href={this.props.project.website} target="_blank" rel="noopener noreferrer">Website</a></div>
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

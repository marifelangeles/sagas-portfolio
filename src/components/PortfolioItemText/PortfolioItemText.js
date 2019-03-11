import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Button } from '@material-ui/core';



class PortfolioItemText extends Component {

    render() {

        return (
            <Grid container style={{ margin:'3rem'}}>
                <Grid item sm={12} >
                    <Typography variant="h6" gutterBottom>
                        {this.props.project.name}
                    </Typography>
                </Grid>
                <Grid item sm={6} >
                    {this.props.project.github !== "" &&
                        <Button variant="outlined" href={this.props.project.github} target="_blank" rel="noopener noreferrer" >
                            Github
                        </Button>  
                    }
                </Grid>
                <Grid item sm={6}>
                    {this.props.project.website !== "" &&
                        <Button variant="outlined" href={this.props.project.website} target="_blank" rel="noopener noreferrer" >
                            Website
                        </Button>  
                    }
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="body1" gutterBottom>
                        {this.props.project.description !== "" &&
                            <span>{this.props.project.description}</span>
                    }
                    </Typography>
                </Grid>
            </Grid>      
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PortfolioItemText);

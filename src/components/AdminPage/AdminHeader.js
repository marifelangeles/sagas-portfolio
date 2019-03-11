import React, { Component } from 'react';
import { connect } from 'react-redux';
// for appbar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class AdminHeader extends Component {

   
    render() {
        return (
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Admin
                        </Typography>
                    </Toolbar>
                </AppBar>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminHeader);

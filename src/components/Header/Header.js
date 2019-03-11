import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonAppBar from './ButtonAppBar';

class Header extends Component {
    render() {
        return (
            <ButtonAppBar />
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Header);

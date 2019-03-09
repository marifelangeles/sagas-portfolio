import React, { Component } from 'react';
import { connect } from 'react-redux';


class PortfolioItem extends Component {

    render() {
        console.log('props', this.props.project);
        
        return (
            <div >
                <div>{this.props.project.thumbnail}</div>
                <div>{this.props.project.name}</div>
                <div>{this.props.project.github}</div>
                <div>{this.props.project.website}</div>
                <div>{this.props.project.description}</div>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PortfolioItem);

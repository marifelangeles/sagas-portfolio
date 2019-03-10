import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminTableRow extends Component {

    handleDeleteClick = () => {
        console.log('in handleDeleteClick', this.props.project.id);
        // identify project id and delete entire row
        this.props.dispatch({type: 'DELETE_PROJECTS', payload: this.props.project.id});
    }


    render() {
        return (
            <>
                <tr>
                    <td>{this.props.project.name}</td>
                    <td>
                        <button>View</button>
                        <button onClick={this.handleDeleteClick}>Delete</button>
                    </td>
                </tr>
            </>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminTableRow);

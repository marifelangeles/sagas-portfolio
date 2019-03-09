import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminTableRow extends Component {

    render() {
        return (
            <>
                <tr>
                    <td>Project Name</td>
                    <td>
                        <button>View</button>
                        <button>Delete</button>
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

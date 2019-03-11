import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTableRow from '../AdminTableRow/AdminTableRow';

class AdminTable extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.projects.map((project, i) =>
                            <AdminTableRow key={i} project={project} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminTable);

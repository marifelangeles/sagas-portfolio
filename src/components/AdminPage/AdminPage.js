import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminForm from '../AdminForm/AdminForm';


class AdminPage extends Component {

    componentDidMount() {
        this.getprojectlist();
    }

    getprojectlist = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }


    render() {
        return (
            <div>
                <header>
                    <h1>Admin</h1>
                </header>
                <h2>Add New Project</h2>
                <AdminForm />

                {/* {JSON.stringify(this.props.reduxState.projects)} */}
                <div>
                    {/* {this.props.reduxState.projects.map((project, i) =>
                        <PortfolioItem key={i} project={project} />
                    )} */}
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminPage);

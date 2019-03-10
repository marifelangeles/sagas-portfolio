import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminForm from '../AdminForm/AdminForm';
import AdminTable from '../AdminTable/AdminTable';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PortfolioPage from '../PortfolioPage/PortfolioPage';

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
                <nav>
                    <Link to='/'>Back to Porfolio</Link>
                </nav>
                <h2>Add New Project</h2>
                <AdminForm />
                <AdminTable />
                <Router>
                    <Route exact path='/' component={PortfolioPage}/>
                </Router>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminPage);

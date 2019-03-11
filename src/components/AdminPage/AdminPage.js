import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// // for appbar
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// components
import AdminForm from '../AdminForm/AdminForm';
import AdminTable from '../AdminTable/AdminTable';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import AdminHeader from './AdminHeader';

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
                <AdminHeader />
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

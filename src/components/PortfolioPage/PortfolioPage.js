import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioItem from '../PortfolioItem/PortfolioItem';


class PortfolioPage extends Component {

    componentDidMount() {
        this.getprojectlist();
    }

    getprojectlist = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props.reduxState.projects)}</pre>
                <div>
                    {this.props.reduxState.projects.map( (project, i) =>
                        <PortfolioItem key={i} project={project} />
                    )}
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PortfolioPage);

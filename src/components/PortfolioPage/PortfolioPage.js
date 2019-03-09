import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import PortfolioItem from '../PortfolioItem/PortfolioItem';


class PortfolioPage extends Component {

    componentDidMount() {
        this.getprojectlist();
    }

    getprojectlist = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }

    // displayAvailableText = () => {
    //     // only show properties that aren't null
    //     const projectProperties = this.props.project;
    //     // for (const property in projectProperties) {
    //     //     console.log(property);

    //     // }
    //     for (const projectKey in projectProperties) {
    //         if (projectProperties.hasOwnProperty(projectKey) !== null) {
    //             console.log(projectProperties[projectKey]);


    //         }
    //     }
    // }


    render() {
        return (
            <div>
                <Header />
                {JSON.stringify(this.props.reduxState.projects)}
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import DatePicker from "react-datepicker";


class AdminForm extends Component {

    state = {
        name: '',
        description: '',
        website: '',
        github: '',
        date_completed: '',
        tag_id: 1,
    }

    
    handleTagChange = (event) => {
        console.log('in handleTagChange');
        let tag = Number(event.target.value);
        console.log('tag', tag);
        this.setState({
            tag_id: tag,
        });

    }

    handleChangeFor = (input) => (event) => {
        // console.log('in handleChange', event.target.value);
        // hold input values to local state
        this.setState({
            [input]: event.target.value,
        })
    }

    handleSubmitClick = (event) => {
        console.log('in handleSubmitClick');
        event.preventDefault();
        // on submit, dispatch to rootSaga for project to be added
        this.props.dispatch({ type: 'ADD_PROJECTS', payload: this.state }); 
        // clear input fields
        this.setState({
            name: '',
            description: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: 1,
        });

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitClick}>
                    <label>
                        Project Name
                        <input type="text" placeholder="Name" onChange={this.handleChangeFor('name')} value={this.state.name} />
                    </label>
                    <label>
                        Date Completed
                        <input type="date" value={this.state.date_completed} onChange={event => this.setState({ date_completed: event.target.value})}/>
                    </label>
                    <label>
                        Tags
                        <select onChange={this.handleTagChange} value={this.state.tag_id}>
                            <option value="0">Select</option>
                            <option value="1">React</option>
                            <option value="2">jQuery</option>
                            <option value="3">Node</option>
                            <option value="4">SQL</option>
                            <option value="5">Redux</option>
                            <option value="6">HTML</option>
                        </select>
                    </label>
                    <label>
                        Github URL
                        <input type="text" placeholder="Github URL" onChange={this.handleChangeFor('github')} value={this.state.github}/>
                    </label>
                    <label>
                        Website URL
                        <input type="text" placeholder="Website URL (Optional)" onChange={this.handleChangeFor('website')} value={this.state.website}/>
                    </label>
                    <label>
                        Description
                        <input type="text" placeholder="Description" onChange={this.handleChangeFor('description')} value={this.state.description}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminForm);

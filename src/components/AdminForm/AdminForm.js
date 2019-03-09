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


    handleDateChange = (event) => {
        console.log('in handleDateChange');
        let date = new Date(event.target.value).toDateString();
        console.log('date', date);
        this.setState({
            date_completed: date,
        });
        
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
        console.log('in handleChange', event.target.value);
        // hold input values to local state
        this.setState({
            [input]: event.target.value,
        })
    }

    handleSubmitClick = (event) => {
        console.log('in handleSubmitClick');
        event.preventDefault();
        // on submit, dispatch to rootSaga for project to be added
        // this.props.dispatch({ type: 'ADD_PROJECTS', payload: this.state})
        
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Project Name
                        <input type="text" placeholder="Name" onChange={this.handleChangeFor('name')} />
                    </label>
                    <label>
                        Date Completed
                        {/* <DatePicker
                            selected={this.state.date_completed}
                            onChange={this.handleChangeFor('date_completed')}
                        /> */}
                        {/* <input type="date" onChange={this.handleChangeFor('date_completed')}/> */}
                        <input type="date" onChange={this.handleDateChange}/>
                    </label>
                    <label>
                        Tags
                        <select onChange={this.handleTagChange}>
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
                        <input type="text" placeholder="Github URL" onChange={this.handleChangeFor('github')} />
                    </label>
                    <label>
                        Website URL
                        <input type="text" placeholder="Website URL (Optional)" onChange={this.handleChangeFor('website')} />
                    </label>
                    <label>
                        Description
                        <input type="text" placeholder="Description" onChange={this.handleChangeFor('description')} />
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

import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdminForm extends Component {

    state = {
        name: '',
        description: '',
        website: '',
        github: '',
        date_completed: '',
        tag_id: '',
    }

    handleChangeFor = (input) => (event) => {
        console.log('in handleChange', event.target.value);
        this.setState({
            [input]: event.target.value,
        })
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
                        <input type="date" onChange={this.handleChangeFor('date_completed')}/>
                    </label>
                    <label>
                        Tags
                        <select onChange={this.handleChangeFor('tag_id')}>
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

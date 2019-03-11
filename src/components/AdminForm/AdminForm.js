import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// select field
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';





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
                    <TextField
                        label="Project Name"
                        value={this.state.name}
                        onChange={this.handleChangeFor('name')}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        label="Date Completed"
                        placeholder="Date Completed"
                        margin="normal"
                        variant="outlined"
                        onChange={event => this.setState({ date_completed: event.target.value })}
                        value={this.state.date_completed}
                    />

                    <FormControl variant="outlined" >
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-age-simple"
                        >
                            Tags
                        </InputLabel>
                        <Select
                            value={this.state.tag_id}
                            onChange={this.handleTagChange} 
                            input={
                                <OutlinedInput
                                    // labelWidth={this.state.labelWidth}
                                    name="Tags"
                                />
                            }
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>React</MenuItem>
                            <MenuItem value={2}>jQuery</MenuItem>
                            <MenuItem value={3}>Node</MenuItem>
                            <MenuItem value={3}>SQL</MenuItem>
                            <MenuItem value={3}>Redux</MenuItem>
                            <MenuItem value={3}>HTML</MenuItem>
                        </Select>
                    </FormControl>
                    
                    <TextField
                        label="Github URL"
                        value={this.state.github}
                        onChange={this.handleChangeFor('github')}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        label="Website URL"
                        value={this.state.website}
                        onChange={this.handleChangeFor('website')} 
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        label="Description"
                        multiline
                        rowsMax="4"
                        value={this.state.description}
                        onChange={this.handleChangeFor('description')}
                        margin="normal"
                        variant="outlined"
                    />

                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.handleSubmitClick}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});


export default connect(mapReduxStateToProps)(AdminForm);

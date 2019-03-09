import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdminForm extends Component {


    render() {
        return (
            <div>
                <form>
                    <label>
                        Project Name
                        <input type="text" placeholder="Name" />
                    </label>
                    <label>
                        Date Completed
                        <input type="date" />
                    </label>
                    <label>
                        Tags
                        {/* https://www.npmjs.com/package/react-tag-input */}
                        <select>
                            <option>React</option>
                            <option>jQuery</option>
                        </select>
                    </label>
                    <label>
                        Github URL
                        <input type="text" placeholder="Github URL" />
                    </label>
                    <label>
                        Website URL
                        <input type="text" placeholder="Website URL (Optional)" />
                    </label>
                    <label>
                        Description
                        <input type="text" placeholder="Description" />
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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';


function* fetchProjects() {
    console.log('in fetch action');
    try {
        // get projects from server
        // fetch array of objects with properties: ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
        const projectResponse = yield axios.get('/project');
        // send projects to redux
        yield put({ type: 'SET_PROJECTS', payload: projectResponse.data });
    } catch(error) {
        console.log('error with fetchProjects', error);
    }
    
}

function* fetchTags(action) {
    console.log('in fetch action', action);
    try {
        // get projects from server
        // fetch array of objects with properties: ("id", "name")
        const tags = yield axios.get('/tag');
        yield put({ type: 'SET_TAGS', payload: tags.data })
    } catch (error) {
        console.log('error with fetchProjects', error);
    }

}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('FETCH_TAGS', fetchTags);

}



// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();

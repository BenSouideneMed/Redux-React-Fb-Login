/*
    the index file contain the main render method
 */
import React from 'react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//create the store
const store = configureStore();


render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

//server configuration generated with npm create-reat-app
registerServiceWorker();

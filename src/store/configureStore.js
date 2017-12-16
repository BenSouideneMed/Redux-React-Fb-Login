/*
    configure and return the created store
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

/*
    add extension to Google chrome for developement
    extension link : https://github.com/zalmoxisus/redux-devtools-extension
 */
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        // apply the middleware
       composeWithDevTools(
            applyMiddleware(thunk),
            // other store enhancers if any
       )
    );
}
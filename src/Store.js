import { configureStore } from '@reduxjs/toolkit';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

export default configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, thunkMiddleware],
    enhancers: [monitorReducersEnhancer]
});

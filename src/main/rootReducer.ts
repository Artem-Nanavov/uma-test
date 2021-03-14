import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';

const createRootReducer = (history: any) => combineReducers({
	router: connectRouter(history as any),
});

export default createRootReducer;

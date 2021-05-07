import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import homeReducer from 'pages/home/reducer';

const createRootReducer = (history: any) => combineReducers({
	router: connectRouter(history as any),
	home: homeReducer,
});

export default createRootReducer;

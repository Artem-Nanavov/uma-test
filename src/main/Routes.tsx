import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {compose} from 'redux';
import {hot} from 'react-hot-loader/root';
import HomePage from 'pages/home/containers/homeContainer';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
	</Switch>
);

export default compose<typeof React.Component>(hot)(Routes);

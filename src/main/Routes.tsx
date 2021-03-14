import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {compose} from 'redux';
import {hot} from 'react-hot-loader/root';

const Routes = () => (
	<Switch>
		<Route exact path="/" render={() => <h1>TITLE</h1>} />
	</Switch>
);

export default compose<typeof React.Component>(hot)(Routes);

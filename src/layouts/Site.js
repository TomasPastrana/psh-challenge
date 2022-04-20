import React, { useContext } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { AppContext } from 'context/provider';
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import routes from "routes.js";

export default function Site(props) {
	const { loading, layoutType, } = useContext(AppContext);

	const getRoutes = () => {
		return routes.map((prop, key) => {

			if (prop.layout === "/site") {
				return (
					<Route
						exact
						history={props.history}
						basename={'foobar'}
						path={prop.path}
						render={props => <prop.component />}
						key={`route-${key}`}
					/>
				);
			} else {
				return null;
			}
		});

	};

	return (
		<>
			<div className={`bf-main-layout ${layoutType}`}>
				<Switch history={props.history}>
					{getRoutes()}
					<Redirect from="/" to="/home" />
				</Switch>
			</div>
			{loading && <LoadingSpinner />}
		</>
	);

}
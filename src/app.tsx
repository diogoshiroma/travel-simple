import React from 'react';
import Container from 'react-bootstrap/Container';
import { SearchPageContainer } from './app/search/search-page.container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RoomDetailsContainer } from './app/details/room-details.container';

export const TravelSimpleApp = () => {
	return (
		<BrowserRouter>
			<Container fluid={true}>
				<Switch>
					<Route exact path='/' component={SearchPageContainer} />
					<Route path='/details' component={RoomDetailsContainer} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

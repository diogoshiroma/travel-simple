import React from 'react';
import { PageTitle } from './components/mol.page-title';
import Container from 'react-bootstrap/Container';
import { SearchPageContainer } from './app/search/search-page.container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RoomDetails } from './app/details/room-details.component';

export class TravelSimpleApp extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Container fluid={true}>
					<PageTitle />
					<Switch>
						<Route exact path='/' component={SearchPageContainer} />
						<Route path='/details' component={RoomDetails} />
          </Switch>
				</Container>
			</BrowserRouter>
		);
	}
}
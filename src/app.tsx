import React from 'react';
import { PageTitle } from './components/mol.page-title';
import Container from 'react-bootstrap/Container';
import { SearchPageContainer } from './app/search/search-page.container';

export class TravelSimpleApp extends React.Component {
	render() {
		return (
			<Container fluid={true}>
				<PageTitle />
				<SearchPageContainer />
			</Container>
		);
	}
}
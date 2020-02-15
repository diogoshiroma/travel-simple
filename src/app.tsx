import React from 'react';
import { SearchPage } from './app/search/search-page.component';
import { PageTitle } from './components/mol.page-title';
import Container from 'react-bootstrap/Container';

export class TravelSimpleApp extends React.Component {
	render() {
		return (
			<Container fluid={true}>
				<PageTitle />
				<SearchPage />
			</Container>
		);
	}
}
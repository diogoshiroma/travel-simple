import React from 'react';
import { SearchForm } from './app/search-form/search-form.component';
import { PageTitle } from './components/mol.page-title';
import Container from 'react-bootstrap/Container';

export class TravelSimpleApp extends React.Component {
	render() {
		return (
			<Container fluid={true}>
				<PageTitle />
				<SearchForm />
			</Container>
		);
	}
}
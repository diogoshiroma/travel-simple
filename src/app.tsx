import React from 'react';
import { Dashboard } from './app/dashboard/dashboard.component';
import { PageTitle } from './components/mol.page_title';

export class TravelSimpleApp extends React.Component {
	render() {
		return (
			<>
				<PageTitle />
				<Dashboard />
			</>
		);
	}
}
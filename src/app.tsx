import React from 'react';
import { Dashboard } from './app/dashboard/dashboard.component';
import { MainNavigator } from './app/navigators/main-navigator';

export class TravelSimpleApp extends React.Component {
	render() {
		return (
			<>
				<MainNavigator />
				<Dashboard />
			</>
		);
	}
}
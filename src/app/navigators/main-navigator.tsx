import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { H1 } from '../../components';
import { Strings } from '../../resources/strings';
import { MainNavigatorStyled } from './main-navigator.style';

export class MainNavigator extends React.Component {
	render() {
		return (
			<MainNavigatorStyled>
        <Row>
          <Col md={{ offset: 5 }}>
            <H1>{Strings.AppName}</H1>
          </Col>
        </Row>
			</MainNavigatorStyled>
		);
	}
}
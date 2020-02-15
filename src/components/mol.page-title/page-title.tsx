import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { H1 } from '..';
import { Strings } from '../../resources/strings';
import { PageTitleStyled } from './page-title.style';

export class PageTitle extends React.Component {
	render() {
		return (
			<PageTitleStyled>
        <Row>
          <Col md={{ offset: 5 }}>
            <H1>{Strings.AppName}</H1>
          </Col>
        </Row>
			</PageTitleStyled>
		);
	}
}
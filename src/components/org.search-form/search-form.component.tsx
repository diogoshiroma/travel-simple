import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Strings } from '../../resources';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const SearchForm = () => {
  return (
    <Form>
      <Container>
        <Row noGutters={true}>
          <Col sm={12}>
            <Form.Group controlId="formCity">
              <Form.Label>{Strings.Components.ResidencesForm.City}</Form.Label>
              <Form.Control type="input" placeholder={Strings.Components.ResidencesForm.Placeholder.City} />
            </Form.Group>
          </Col>
        </Row>

        <Row noGutters={true}>
          <Col sm={5}>
            <Form.Group controlId="formCheckinDate">
              <Form.Label>{Strings.Components.ResidencesForm.CheckinDate}</Form.Label>
              <Form.Control type="password" placeholder={Strings.Components.ResidencesForm.Placeholder.CheckinDate} />
            </Form.Group>
          </Col>
          <Col sm={{ span: 5, offset: 2 }}>
            <Form.Group controlId="formCheckoutDate">
              <Form.Label>{Strings.Components.ResidencesForm.CheckoutDate}</Form.Label>
              <Form.Control type="password" placeholder={Strings.Components.ResidencesForm.Placeholder.CheckoutDate} />
            </Form.Group>
          </Col>
        </Row>

        <Row noGutters={true}>
          <Col>
            <Button variant="primary" type="submit" block>{Strings.Components.ResidencesForm.Submit}</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

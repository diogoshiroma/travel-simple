import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Strings } from '../../resources';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

interface SearchFormInterface {
  onChangeCity: (event: any) => void;
  onChangeCheckinDate: (event: any) => void;
  onChangeCheckoutDate: (event: any) => void;
  onSubmit: () => void;
}

export const SearchForm = (props: SearchFormInterface) => {
  return (
    <Form>
      <Container>
        <Row noGutters={true}>
          <Col sm={12}>
            <Form.Group controlId="formCity">
              <Form.Label>{Strings.Components.ResidencesForm.City}</Form.Label>
              <Form.Control
                type="input"
                placeholder={Strings.Components.ResidencesForm.Placeholder.City}
                onChange={props.onChangeCity}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row noGutters={true}>
          <Col sm={5}>
            <Form.Group controlId="formCheckinDate">
              <Form.Label>{Strings.Components.ResidencesForm.CheckinDate}</Form.Label>
              <Form.Control
                type="password"
                placeholder={Strings.Components.ResidencesForm.Placeholder.CheckinDate}
                onChange={props.onChangeCheckinDate}
              />
            </Form.Group>
          </Col>
          <Col sm={{ span: 5, offset: 2 }}>
            <Form.Group controlId="formCheckoutDate">
              <Form.Label>{Strings.Components.ResidencesForm.CheckoutDate}</Form.Label>
              <Form.Control
                type="password"
                placeholder={Strings.Components.ResidencesForm.Placeholder.CheckoutDate}
                onChange={props.onChangeCheckoutDate}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row noGutters={true}>
          <Col>
            <Button variant="primary" onClick={props.onSubmit} block>{Strings.Components.ResidencesForm.Submit}</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

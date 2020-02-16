import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Strings } from '../../resources';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { VSeparator } from '../atm.separators';
import { FieldErrorMessage } from '../typography.style';

interface SearchFormInterface {
  onChangeCity: (event: any) => void;
  onChangeCheckinDate: (event: any) => void;
  onChangeCheckoutDate: (event: any) => void;
  onBlurCheckinDate: () => void;
  onBlurCheckoutDate: () => void;
  onSubmit: () => void;
  disabled: boolean;
  checkinInvalidDateFormat: boolean;
  checkinNonExistingDate: boolean;
  checkoutInvalidDateFormat: boolean;
  checkoutNonExistingDate: boolean;
  dirtyCheckin: boolean;
  dirtyCheckout: boolean;
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
                type="input"
                placeholder={Strings.Components.ResidencesForm.Placeholder.CheckinDate}
                onChange={props.onChangeCheckinDate}
                onBlur={props.onBlurCheckinDate}
              />
              <Form.Text className="text-muted" style={{ fontStyle: 'italic' }}>
                {Strings.Components.ResidencesForm.DateFormat}
              </Form.Text>
              {props.checkinInvalidDateFormat && props.dirtyCheckin &&
                <FieldErrorMessage>
                  {Strings.Error.ResidencesForm.InvalidDateFormat}
                </FieldErrorMessage>
              }
              {props.checkinNonExistingDate && props.dirtyCheckin &&
                <FieldErrorMessage>
                  {Strings.Error.ResidencesForm.NonExistingDate}
                </FieldErrorMessage>
              }
            </Form.Group>
          </Col>
          <Col sm={{ span: 5, offset: 2 }}>
            <Form.Group controlId="formCheckoutDate">
              <Form.Label>{Strings.Components.ResidencesForm.CheckoutDate}</Form.Label>
              <Form.Control
                type="input"
                placeholder={Strings.Components.ResidencesForm.Placeholder.CheckoutDate}
                onChange={props.onChangeCheckoutDate}
                onBlur={props.onBlurCheckoutDate}
              />
              <Form.Text className="text-muted" style={{ fontStyle: 'italic' }}>
                {Strings.Components.ResidencesForm.DateFormat}
              </Form.Text>
              {props.checkoutInvalidDateFormat && props.dirtyCheckout &&
                <FieldErrorMessage>
                  {Strings.Error.ResidencesForm.InvalidDateFormat}
                </FieldErrorMessage>
              }
              {props.checkoutNonExistingDate && props.dirtyCheckout &&
                <FieldErrorMessage>
                  {Strings.Error.ResidencesForm.NonExistingDate}
                </FieldErrorMessage>
              }
            </Form.Group>
          </Col>
        </Row>
        <VSeparator half={true} />
        <Row noGutters={true}>
          <Col>
            <Button disabled={props.disabled} variant="primary" onClick={props.onSubmit} block>
              {Strings.Components.ResidencesForm.Submit}
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

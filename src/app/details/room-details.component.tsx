import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { HotelIcon } from '../../resources';
import { H2, H3, VSeparator, H1, PageTitle } from '../../components';
import Button from 'react-bootstrap/Button';

interface RoomDetailsProps {
  
}

export const RoomDetails = (props: RoomDetailsProps) => {
  return (
    <>
      <PageTitle showButton={true} />
      <VSeparator />
      <Row>
        <Col sm={6}>
          <Image src={HotelIcon} rounded />
        </Col>
        <Col sm={6}>
          <VSeparator />
          <VSeparator />
          <VSeparator />
          <Row noGutters={true}>
            <H1>Hotel</H1>
          </Row>
          <Row noGutters={true}>
            <H3>Address - City</H3>
          </Row>
          <VSeparator />
          <Row noGutters={true}>
            <H2>bedroomName</H2>
          </Row>
          <VSeparator />
          <Row noGutters={true}>
            <H2>Available Places: availablePlaces</H2>
          </Row>
          
          <VSeparator />
          <VSeparator />
          <VSeparator />
          <VSeparator />

          <H3>Reserve agora o seu quarto:</H3>
          <VSeparator />
          <Button variant="primary" onClick={() => alert("Comprou!")} block>Comprar</Button>
        </Col>
      </Row>
    </>
  );
};

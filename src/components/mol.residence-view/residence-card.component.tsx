import * as React from 'react';
import { Residence } from '../../model/entities';
import Card from 'react-bootstrap/Card';
import { ResidenceImg, Strings } from '../../resources';

export interface ResidenceCardProps {
  residence: Residence;
  onClick: () => void;
}

const IMG_WIDTH: number = 200;

export const ResidenceCard = (props: ResidenceCardProps) => {
  return (
    <Card className={"text-center"} onClick={props.onClick}>
      <Card.Img style={{ width: IMG_WIDTH }} variant={'top'} src={ResidenceImg} />
      <Card.Body>
        <Card.Title>{props.residence.hotel}</Card.Title>
        <Card.Text>{props.residence.address + " - " + props.residence.city}</Card.Text>
        <Card.Subtitle>{props.residence.bedroomName}</Card.Subtitle>
        <Card.Text>{Strings.Components.Residence.AvailablePlaces + props.residence.availablePlaces}</Card.Text>
      </Card.Body>
    </Card>
  );
};

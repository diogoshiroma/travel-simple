import * as React from 'react';
import { Residence } from '../../model/entities';
import { ResidenceCard, VSeparator } from '..';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface ResidencesListProps {
  residences: Residence[];
}

export const ResidencesListComponent = (props: ResidencesListProps) => {
  return (
    <>
      <VSeparator />
      <Row>
        {props.residences.map((res, index) => {
          const key: string = "" + index;
          return (
            <Col md={3} key={key}>
              <ResidenceCard
                residence={res}
                onClick={() => alert(res.bedroomName)}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

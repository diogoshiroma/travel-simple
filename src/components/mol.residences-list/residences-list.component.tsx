import * as React from 'react';
import { Residence } from '../../model/entities';
import { ResidenceCard } from '..';
import { ResidencesListStyled } from './residences-list.component.style';
import Col from 'react-bootstrap/Col';

interface ResidencesListProps {
  residences: Residence[];
}

export const ResidencesListComponent = (props: ResidencesListProps) => {
  return (
    <>
      <ResidencesListStyled>
        {props.residences.map((res, index) => {
          const key: string = "" + index;
          return (
            <Col md={'auto'} key={key}>
              <ResidenceCard
                residence={res}
                onClick={() => alert(res.bedroomName)}
              />
            </Col>
          );
        })}
      </ResidencesListStyled>
    </>
  );
}

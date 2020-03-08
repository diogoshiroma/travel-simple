import * as React from 'react';
import { Residence } from '../../model/entities';
import { ResidenceCard, VSeparator } from '..';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

interface ResidencesListProps {
  residences: Residence[];
  startDate?: Date;
  endDate?: Date;
}

const RESIDENCES_PER_ROW = 4;

export const ResidencesListComponent = (props: ResidencesListProps) => {
  const getQueryString = (res: Residence) => {
    // const startDateStr = !!props.startDate ? ('&startDate=' + props.startDate.toISOString().split('T')[0]) : '';
    // const endDateStr = !!props.endDate ? ('&endDate=' + props.endDate.toISOString().split('T')[0]) : '';
    // return '/details?room=' + res.id + startDateStr + endDateStr;
    return '/details?room=' + res.id;
  };

  return (
    <>
      <VSeparator />
      <Row>
        {props.residences.map((res, index) => {
            const key: string = "" + index;
            return (
              <Col md={12 / RESIDENCES_PER_ROW} key={key}>
                <Link to={getQueryString(res)} style={{textDecoration: "none"}}>
                  <ResidenceCard residence={res} />
                </Link>
              </Col>
            );
          })
        }
      </Row>
    </>
  );
};

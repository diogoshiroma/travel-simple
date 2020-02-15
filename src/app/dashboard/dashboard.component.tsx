import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Residence } from '../../model/entities';
import { ResidenceComponent } from './residence-view.component';


export const Dashboard = () => (
  <Container fluid={true}>
    <ResidenceComponent residence={datasourceResidences[0]}  />
  </Container>
);

const datasourceResidences: Residence[] = [
  {
    id: '1',
    machines: [
      {
        order: 1,
        deadline: new Date(),
      },
      {
        order: 2,
        deadline: new Date(),
      },
    ],
  },
  {
    id: '4B',
    machines: [
      {
        order: 1,
        deadline: new Date(),
      },
    ],
  },
  {
    id: '4DD',
    machines: [
      {
        order: 1,
        deadline: new Date(),
      },
      {
        order: 2,
        deadline: new Date(),
      },
      {
        order: 3,
        deadline: new Date(),
      },
    ],
  },
];

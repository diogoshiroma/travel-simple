import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Residence } from '../../model/entities';
import { ResidencesListComponent } from '../../components/mol.residences-list/residences-list.component';

export const SearchForm = () => (
  <ResidencesListComponent residences={datasourceResidences} />
);

const datasourceResidences: Residence[] = [
  {
    id: 1,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Duplo Standard",
    city: "Campos do Jordão",
    availablePlaces: 2,
  },
  {
    id: 2,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Duplo Superior",
    city: "Campos do Jordão",
    availablePlaces: 2,
  },
  {
    id: 3,
    hotel: "Hotel Leão da Montanha",
    address: "Rua Dr. Raul Mesquita, 443",
    bedroomName: "Quarto Duplo Standard",
    city: "Campos do Jordão",
    availablePlaces: 2,
  },
  {
    id: 4,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Duplo Standard",
    city: "Campos do Jordão",
    availablePlaces: 2,
  },
  {
    id: 5,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Duplo Superior",
    city: "Campos do Jordão",
    availablePlaces: 2,
  },
  {
    id: 6,
    hotel: "Hotel Leão da Montanha",
    address: "Rua Dr. Raul Mesquita, 443",
    bedroomName: "Quarto Duplo Standard",
    city: "Campos do Jordão",
    availablePlaces: 2,
  },
];

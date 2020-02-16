import { Residence } from "../../model/entities";

export const getResidenceById = (id: number): Residence | null  => {
  const residences = datasourceResidences.filter(res => res.id === id);
  return residences.length > 0 ? residences[0] : null;
}

export const datasourceResidences: Residence[] = [
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
    city: "São Paulo",
    availablePlaces: 2,
  },
  {
    id: 5,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Duplo Superior",
    city: "São Paulo",
    availablePlaces: 2,
  },
  {
    id: 6,
    hotel: "Hotel Leão da Montanha",
    address: "Rua Dr. Raul Mesquita, 443",
    bedroomName: "Quarto Duplo Standard",
    city: "São Paulo",
    availablePlaces: 2,
  },
  {
    id: 7,
    hotel: "Hotel Leão da Montanha",
    address: "Rua Dr. Raul Mesquita, 443",
    bedroomName: "Quarto Duplo King",
    city: "São Paulo",
    availablePlaces: 2,
  },
  {
    id: 8,
    hotel: "Hotel Leão da Montanha",
    address: "Rua Dr. Raul Mesquita, 443",
    bedroomName: "Quarto Triplo",
    city: "São Paulo",
    availablePlaces: 2,
  },
];
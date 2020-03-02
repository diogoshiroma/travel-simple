import { Residence } from "../../model/entities";
import { getResidences } from "./requests";

export const getResidenceById = (id: number): Residence | null  => {
  const residences = datasourceResidences.filter(res => res.id === id);
  return residences.length > 0 ? residences[0] : null;
}

export const populateResidences = async () => {
  datasourceResidences = await getResidences();
  console.log(datasourceResidences);
  console.log(datasourceResidences[0]);
  if (datasourceResidences.length > 0) {
    console.log('Dados carregados corretamente');
  } else {
    datasourceResidences = placeholder;
    console.log('Usando placeholder');
  }
}

export let datasourceResidences: Residence[] = [];

const placeholder: Residence[] = [
  // Campos do Jordão
  {
    id: 1,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Duplo Standard",
    city: "Campos do Jordão",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-17'), new Date('2020-02-18'), new Date('2020-02-19'), new Date('2020-02-20')],
    purchased: false,
  },
  {
    id: 2,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Triplo Superior",
    city: "Campos do Jordão",
    availablePlaces: 3,
    busyDays: [new Date('2020-02-21'), new Date('2020-02-22'), new Date('2020-02-27'), new Date('2020-02-28')],
    purchased: false,
  },
  {
    id: 3,
    hotel: "Hotel Leão da Montanha",
    address: "Rua Dr. Raul Mesquita, 443",
    bedroomName: "Quarto Duplo Standard",
    city: "Campos do Jordão",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-23'), new Date('2020-02-24')],
    purchased: false,
  },
  {
    id: 4,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Duplo Superior",
    city: "Campos do Jordão",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-25'), new Date('2020-02-26')],
    purchased: false,
  },

  // São Paulo
  {
    id: 5,
    hotel: "North Palace Hotel",
    address: "R. Santa Teresa de Jesus, 339 - Vila Santa Terezinha (Zona Norte)",
    bedroomName: "Quarto Triplo Superior",
    city: "São Paulo",
    availablePlaces: 3,
    busyDays: [new Date('2020-02-19'), new Date('2020-02-20')],
    purchased: false,
  },
  {
    id: 6,
    hotel: "North Palace Hotel",
    address: "R. Santa Teresa de Jesus, 339 - Vila Santa Terezinha (Zona Norte)",
    bedroomName: "Quarto Duplo Standard",
    city: "São Paulo",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-19'), new Date('2020-02-20')],
    purchased: false,
  },
  {
    id: 7,
    hotel: "Holiday Inn Sao Paulo Parque Anhembi",
    address: "Rua Professor Milton Rodriguez, 100 - Parque Anhembi",
    bedroomName: "Quarto Duplo King",
    city: "São Paulo",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-23'), new Date('2020-02-24')],
    purchased: false,
  },
  {
    id: 8,
    hotel: "Holiday Inn Sao Paulo Parque Anhembi",
    address: "Rua Professor Milton Rodriguez, 100 - Parque Anhembi",
    bedroomName: "Quarto Triplo",
    city: "São Paulo",
    availablePlaces: 3,
    busyDays: [new Date('2020-02-25'), new Date('2020-02-26')],
    purchased: false,
  },
  {
    id: 9,
    hotel: "Holiday Inn Sao Paulo Parque Anhembi",
    address: "Rua Professor Milton Rodriguez, 100 - Parque Anhembi",
    bedroomName: "Quarto Casal",
    city: "São Paulo",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-27'), new Date('2020-02-28'), new Date('2020-02-29')],
    purchased: false,
  },
];
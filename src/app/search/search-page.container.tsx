import React from 'react';
import { Residence } from '../../model/entities';
import { SearchPage } from './search-page.component';

export const SearchPageContainer = () => {
  const [city, setCity] = React.useState('');
  const [checkinDateText, setCheckinDateText] = React.useState('');
  const [checkoutDateText, setCheckoutDateText] = React.useState('');
  
  const handleChangeCity = (event: any) => {
    setCity(event.target.value);
  };

  const handleChangeCheckinDate = (event: any) => {
    setCheckinDateText(event.target.value);
  };
  
  const handleChangeCheckoutDate = (event: any) => {
    setCheckoutDateText(event.target.value);
  };

  const matchResidences = (): Residence[] => {
    return datasourceResidences.filter(
      residence => residence.city == city
    );
  }

  return (
    <SearchPage
      onChangeCity={handleChangeCity}
      onChangeCheckinDate={handleChangeCheckinDate}
      onChangeCheckoutDate={handleChangeCheckoutDate}
      matchResidences={matchResidences}
    />
  );
};

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

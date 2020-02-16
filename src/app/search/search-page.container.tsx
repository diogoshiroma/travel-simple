import React from 'react';
import { Residence } from '../../model/entities';
import { SearchPage } from './search-page.component';
import { datasourceResidences } from '../data';

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

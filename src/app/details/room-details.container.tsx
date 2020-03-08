import React from 'react';
import { Residence, setResidenceAsPurchased } from '../../model';
import { RoomDetails } from './room-details.component';
import { setBedroomAsPurchased, addLodgingEvent } from '../data/requests';
import { AxiosError } from 'axios';

interface RoomDetailsContainerProps {
  residence: Residence | null;
  startDate?: Date;
  endDate?: Date;
}

export const RoomDetailsContainer = (props: RoomDetailsContainerProps) => {
  const [showDialogBuyConfirmation, setShowDialogBuyConfirmation] = React.useState(false);
  const [showDialogBuyDone, setShowDialogBuyDone] = React.useState(false);

  const handleClickBuy = () => {
    setShowDialogBuyConfirmation(true);
  };

  const handleClickBuyConfirm = () => {
    if (props.residence) {
      setResidenceAsPurchased(props.residence);
      // set dates as busy
      const data: Promise<any> = setBedroomAsPurchased(props.residence);
      data.catch((error: AxiosError) => {
        console.log(error); // show dialog (ja foi comprado...)
      });
    }
    setShowDialogBuyConfirmation(false);
    setShowDialogBuyDone(true);
  };

  const handleClickBuyCancel = () => {
    setShowDialogBuyConfirmation(false);
  };

  const handleClickBuyDone = () => {
    setShowDialogBuyDone(false);
  };

  const handleClickAddToTour = () => {
    console.log('handleClickAddToTour');
    console.log(props.startDate);
    console.log(props.endDate);
    if (props.residence && props.startDate && props.endDate) {
      addLodgingEvent(props.residence, props.startDate, props.endDate);
    }
  };

  return (
    <RoomDetails
      residence={props.residence}
      showDialogBuyConfirmation={showDialogBuyConfirmation}
      showDialogBuyDone={showDialogBuyDone}
      enableAddToTour={!!props.startDate && !!props.endDate}
      onClickBuy={handleClickBuy}
      onClickBuyConfirm={handleClickBuyConfirm}
      onClickBuyCancel={handleClickBuyCancel}
      onClickBuyDone={handleClickBuyDone}
      onClickAddToTour={handleClickAddToTour}
    />
  )
}
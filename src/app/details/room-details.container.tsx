import React from 'react';
import { Residence, addBusyDates, containsBusyDay, hasBusyDates } from '../../model';
import { RoomDetails } from './room-details.component';
import { addLodgingEvent, updateBedroom } from '../data/requests';

interface RoomDetailsContainerProps {
  residence: Residence | null;
  startDate?: Date;
  endDate?: Date;
}

export const RoomDetailsContainer = (props: RoomDetailsContainerProps) => {
  const [showDialogBuyConfirmation, setShowDialogBuyConfirmation] = React.useState(false);
  const [showDialogBuyDone, setShowDialogBuyDone] = React.useState(false);
  const [enableAddToTour, setEnableAddToTour] = React.useState(true);

  const handleClickBuy = () => {
    setShowDialogBuyConfirmation(true);
  };

  const handleClickBuyConfirm = () => {
    try {
      if (props.residence && props.startDate && props.endDate) {
        addBusyDates(props.residence, props.startDate, props.endDate);
        updateBedroom(props.residence);
      }
      setShowDialogBuyConfirmation(false);
      setShowDialogBuyDone(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickBuyCancel = () => {
    setShowDialogBuyConfirmation(false);
  };

  const handleClickBuyDone = () => {
    setShowDialogBuyDone(false);
  };

  const handleClickAddToTour = () => {
    if (props.residence && props.startDate && props.endDate) {
      addLodgingEvent(props.residence, props.startDate, props.endDate);
      setEnableAddToTour(false);
    }
  };

  const handleOpenTravelTour = () => {
    window.open('http://localhost:3006/trip-planner', '_blank');
  };

  const purchasedRoom = () => {
    if (props.residence && props.startDate && props.endDate) {
      return containsBusyDay(props.residence, props.startDate, props.endDate);
    } else if (props.residence && !props.startDate && !props.endDate) {
      return hasBusyDates(props.residence);
    } else {
      return false;
    }
  };

  return (
    <RoomDetails
      residence={props.residence}
      showDialogBuyConfirmation={showDialogBuyConfirmation}
      showDialogBuyDone={showDialogBuyDone}
      enablePurchase={!purchasedRoom()}
      enableAddToTour={enableAddToTour}
      onClickBuy={handleClickBuy}
      onClickBuyConfirm={handleClickBuyConfirm}
      onClickBuyCancel={handleClickBuyCancel}
      onClickBuyDone={handleClickBuyDone}
      onClickAddToTour={handleClickAddToTour}
      onOpenTravelTour={handleOpenTravelTour}
    />
  )
}
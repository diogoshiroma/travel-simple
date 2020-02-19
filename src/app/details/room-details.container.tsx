import React from 'react';
import { Residence, setResidenceAsPurchased } from '../../model';
import { RoomDetails } from './room-details.component';

interface RoomDetailsContainerProps {
  residence: Residence | null;
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

  return (
    <RoomDetails
      residence={props.residence}
      showDialogBuyConfirmation={showDialogBuyConfirmation}
      showDialogBuyDone={showDialogBuyDone}
      onClickBuy={handleClickBuy}
      onClickBuyConfirm={handleClickBuyConfirm}
      onClickBuyCancel={handleClickBuyCancel}
      onClickBuyDone={handleClickBuyDone}
    />
  )
}
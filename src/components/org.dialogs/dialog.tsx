import React from 'react';
import { Residence } from '../../model';
import Modal from 'react-bootstrap/Modal';
import { Strings } from '../../resources';
import Button from 'react-bootstrap/Button';

interface DialogProps {
  show: boolean;
  residence: Residence;
  onCancelClick: () => void;
  onAcceptClick: () => void;
}

export const Dialog = (props: DialogProps) => {
  const getModalTitle = () => {
    return `${Strings.Components.Dialog.Title} ${props.residence.bedroomName} (${props.residence.hotel})`;
  };

  return (
    <Modal show={props.show}>
      <Modal.Header closeButton>
        <Modal.Title>{getModalTitle()}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancelClick}>
          {Strings.Components.Dialog.Cancel}
        </Button>
        <Button variant="primary" onClick={props.onAcceptClick}>
          {Strings.Components.Dialog.Accept}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

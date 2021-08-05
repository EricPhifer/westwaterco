/* Modal code from: https://levelup.gitconnected.com/accessible-modals-in-gatsby-using-portals-1e80e33a8a2 */

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { ImCross } from 'react-icons/im';
import Portal from './Portal';

const PortalStyles = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .modalContainer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-color: white;
    color: black;
    background-color: var(--white);
    padding: 2rem;
  }
  button {
    background-color: transparent;
    font-size: 3rem;
    font-family: 'Times New Roman', Times, serif;
    box-shadow: none;
    float: right;
    margin-top: 5rem;
    margin-right: 5rem;
  }
`;

const StaffModal = forwardRef((props, ref) => {
  StaffModal.displayName = 'Staff Modal';
  const [display, setDisplay] = useState(false);

  const handleOpen = () => {
    setDisplay(true);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  useImperativeHandle(ref, () => ({
    openStaffModal: () => handleOpen(),
    closeStaffModal: () => handleClose(),
  }));

  if (display) {
    return (
      <Portal>
        <PortalStyles>
          <div className="modalBackdrop" />
          <div className="modalContainer">{props.children}</div>
          <button type="button" onClick={handleClose}>
            <ImCross />
          </button>
        </PortalStyles>
      </Portal>
    );
  }

  return null;
});

export default StaffModal;

import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';

interface ChatroomPopupProps {
  open: boolean;  // The open prop will control if the popup is visible
  onClose: () => void;  // Function to close the popup
}

const CloseButton = styled(Button)(() => ({
  color: '#000000',  // Black text color
  backgroundColor: '#ffffff',  // White background color
  marginBottom: '10px',
  height: '50px',
  width: '250px',
  '&:hover': {
    backgroundColor: '#cccccc',  // Light grey on hover
  },
}));

const ChatroomPopup: React.FC<ChatroomPopupProps> = ({ open, onClose }) => {
  return (
    // Only render the popup if the 'open' prop is true
    open ? (
      <div style={overlayStyle}>
        <div style={popupStyle}>
          <h2>Check out our chatroom!</h2>
          <p>Explore our chatroom and connect with other members of the Silk Road community.</p>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </div>
      </div>
    ) : null  // Return null when open is false
  );
};

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,  // Make sure it's above all other content
};

const popupStyle: React.CSSProperties = {
  backgroundColor: 'black',  // Black background for the popup
  padding: '20px',
  borderRadius: '10px',  // Rounded corners
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Soft shadow for the popup
};

export default ChatroomPopup;

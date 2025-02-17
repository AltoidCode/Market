import React, { useState, useEffect } from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChatroomPopup from '../components/popupChatroom';  // Import the new popup
import './styles/Toolbar.css';

export const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);  // Show the popup on load
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);
  const closePopup = () => {
    setShowPopup(false);  // Close the popup when the user clicks "Close"
  };

  // Check if the user has already seen the popup during the session
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenChatPopup');
    if (hasSeenPopup) {
      setShowPopup(false);  // Hide the popup if the user has already seen it
    }
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);  // Close the popup when the user clicks "Close"
    localStorage.setItem('hasSeenChatPopup', 'true');  // Store that the user has seen the popup
  };

  return (
    <div>
      {/* Pass 'open' prop to control visibility */}
      <ChatroomPopup open={showPopup} onClose={handlePopupClose} />

      <AppBar sx={{ zIndex: 0 }}>
        <Toolbar className='Toolbar' sx={{ background: 'black' }}>
          The Silk Road
        </Toolbar>
      </AppBar>

      <Button onClick={() => navigate('/Settings')}
        sx={{
          background: 'black',
          color: 'white',
          fontSize: '24px',
          padding: '13px 30px',
          position: 'absolute',
          top: '-4px',
          right: '0px',
          zIndex: 1,
          fontFamily: 'Times New Roman'
        }}
      >
        Settings
      </Button>

      <Button onClick={() => navigate('/Market')}
        sx={{
          background: 'black',
          color: 'white',
          fontSize: '24px',
          padding: '13px 30px',
          position: 'absolute',
          top: '-4px',
          left: '650px',
          zIndex: 1,
          fontFamily: 'Times New Roman'
        }}
      >
        Market
      </Button>
    </div>
  );
};

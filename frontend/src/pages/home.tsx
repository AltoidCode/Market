import React from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import './styles/Toolbar.css';



export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div>
      <AppBar sx={{ zIndex: 0 }}>
        <Toolbar className='Toolbar' sx={{ background: 'black' }}>
          The Silk Road
        </Toolbar>
      </AppBar>
      <Button onClick={handleLogout}
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
                Logout
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
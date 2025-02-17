import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/Toolbar.css';

export const SettingsPage = () => {

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
    </div>
  )
}


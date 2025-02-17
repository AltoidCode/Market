import React from 'react';
import { MuiNavbar } from '../components/MuiNavbar'; // Adjust the path as needed
import { RegisterBox } from '../components/RegisterBox'; // Adjust the path as needed
import { AppBar, Toolbar } from '@mui/material';
import { color, styled } from '@mui/system';
import './styles/Toolbar.css';

export const Dashboard: React.FC = () => {
  return (
    <div>
      <AppBar>
        <Toolbar className='Toolbar' sx={{background: 'black'}}>
          Dashboard
        </Toolbar>
      </AppBar>
    </div>
  );
};
import React, { useContext, useEffect, useState } from 'react';
import { MuiNavbar } from '../components/MuiNavbar'; // Adjust the path as needed
import { RegisterBox } from '../components/RegisterBox'; // Adjust the path as needed
import { AppBar, Toolbar } from '@mui/material';
import { color, styled } from '@mui/system';
import './styles/Toolbar.css';
import Sidebar from '../components/sidebar';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {

  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
      const role = localStorage.getItem('role');
      if (role === 'admin') {
          setIsAdmin(true);
          navigate('/Dashboard');
      } else {
          navigate('/*');
      }
  }, [navigate]);

  return (
    <div>
      <AppBar>
        <Toolbar className='Toolbar' sx={{background: 'black'}}>
          Dashboard
        </Toolbar>
      </AppBar>
      <Sidebar />
    </div>
  );
};
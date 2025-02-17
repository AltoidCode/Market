import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import './styles/Toolbar.css'
import { Card, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const MarketPage = () => {

  const navigate = useNavigate();
  
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <AppBar sx={{ zIndex: 0 }}>
        <Toolbar className='Toolbar' sx={{background: 'black'}}>  
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100%' }}>
        <Button onClick={() => navigate('/Reviews')} 
          sx={{
            background: 'black', 
            color: 'white', 
            fontSize: '24px', 
            padding: '13px 30px', 
            position: 'absolute', 
            top: '-25px', 
            zIndex: 1,
            fontFamily: 'Times New Roman'
          }}
        >
          Reviews
        </Button>
        <Button onClick={() => navigate('/Home')}
          sx={{
            background: 'black', 
            color: 'white', 
            fontSize: '24px', 
            padding: '13px 30px', 
            position: 'absolute', 
            top: '-25px', 
            left: '-700px', 
            zIndex: 1,
            fontFamily: 'Times New Roman'
          }}
        >
          Home
        </Button>
        <Button onClick={() => navigate('/FAQ')}
          sx={{
            background: 'black', 
            color: 'white', 
            fontSize: '24px', 
            padding: '13px 30px', 
            position: 'absolute', 
            top: '-25px', 
            right: '-700px', 
            zIndex: 1,
            fontFamily: 'Times New Roman'
          }}
        >
          FAQ
        </Button>
      </div>
    </div>
  )
}
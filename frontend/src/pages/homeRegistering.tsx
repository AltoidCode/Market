import React from 'react'
import { MuiNavbar } from '../components/MuiNavbar'
import RegisterBox from '../components/RegisterBox'
import { AppBar, Toolbar } from '@mui/material'

export const HomeRegistering = () => {
  return (
    <div>
    <MuiNavbar />
    <RegisterBox />
    <AppBar>
      <Toolbar className='Toolbar' sx={{background: 'black'}}>
        The Silk Road
      </Toolbar>
    </AppBar>
  </div>
  )
}

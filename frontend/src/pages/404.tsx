import styled from '@emotion/styled';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const WhiteButton = styled(Button)({
  color: '#000000', // Black text color
  backgroundColor: '#ffffff', // White background color
  marginBottom: '10px',
  height: '50px',
  '&:hover': {
    backgroundColor: '#cccccc', // Grey background color on hover
  },
});

const StyledPaper = styled(Paper)({
  backgroundColor: '#000000',
  borderRadius: '10px',
  padding: '40px', // Decreased padding for smaller box
  textAlign: 'center',
  position: 'absolute',
  top: '210px',
  width: '430px',
});

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#ffffff', // White text color
  },
  '& .MuiInputLabel-root': {
    color: '#ffffff', // White label color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffffff', // White border color
    },
    '&:hover fieldset': {
      borderColor: '#cccccc', // Grey border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffffff', // White border color when focused
    },
  },
});

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" sx={{ color: '#ffffff', marginBottom: '20px', height:'30px' }}>
        You have gone astray
      </Typography>
      <WhiteButton variant="contained" fullWidth onClick={() => navigate('/home')}>
        Click here to return to home
      </WhiteButton>
    </StyledPaper>
  )
}

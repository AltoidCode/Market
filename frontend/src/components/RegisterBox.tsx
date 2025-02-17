import React from 'react';
import { Paper, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)({
  backgroundColor: '#000000',
  borderRadius: '10px',
  padding: '120px', // Increased padding
  textAlign: 'center',
  position: 'absolute',
  top: '210px',
  width: '430px',
});

const WhiteButton = styled(Button)({
  color: '#000000', // Black text color
  backgroundColor: '#ffffff', // White background color
  marginBottom: '10px',
  height: '50px',
  '&:hover': {
    backgroundColor: '#cccccc', // Grey background color on hover
  },
});

export const RegisterBox = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    };
    const handleRegisterClick = () => {
        navigate('/register');
    };

  return (

    <StyledPaper elevation={3}>
      <Typography variant="h5" sx={{ color: '#ffffff', marginBottom: '20px', height:'150px' }}>
        You need to log in, Register if you dont have an account
      </Typography>
      <Box mb={2}>
        <WhiteButton variant="contained" fullWidth onClick={handleLoginClick}>
          Login
        </WhiteButton>
      </Box>
      <WhiteButton variant="contained" fullWidth onClick={handleRegisterClick}>
        Register
      </WhiteButton>
    </StyledPaper>
  );
};

export default RegisterBox;

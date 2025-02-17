import React from 'react';
import { Paper, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)({
  backgroundColor: '#000000',
  borderRadius: '10px',
  padding: '40px', // Decreased padding for smaller box
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

const RegisterLoginBox = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" sx={{ color: '#ffffff', marginBottom: '20px' }}>
        Login
      </Typography>
      <Box mb={2}>
        <WhiteButton variant="contained" fullWidth onClick={handleLogin}>
          Login
        </WhiteButton>
      </Box>
      <WhiteButton variant="contained" fullWidth onClick={() => navigate('/register')}>
        Register
      </WhiteButton>
    </StyledPaper>
  );
};

export default RegisterLoginBox;

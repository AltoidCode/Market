import React from 'react';
import styled from '@emotion/styled';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
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

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login button clicked');
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" sx={{ color: '#ffffff', marginBottom: '20px' }}>
        Register
      </Typography>
      <Box mb={2}>
      <StyledTextField
          variant="outlined"
          fullWidth
          label="Email"
          margin="normal"
          InputProps={{ sx: { height: '50px' } }}
        />
        <StyledTextField
          variant="outlined"
          fullWidth
          label="Username"
          margin="normal"
          InputProps={{ sx: { height: '50px' } }}
        />
        <StyledTextField
          variant="outlined"
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          InputProps={{ sx: { height: '50px' } }}
        />
        <StyledTextField
          variant="outlined"
          fullWidth
          label="Repeat Password"
          type="password"
          margin="normal"
          InputProps={{ sx: { height: '50px' } }}
        />
      </Box>
      <WhiteButton variant="contained" fullWidth onClick={handleLogin}>
        Register
      </WhiteButton>
      <WhiteButton variant="contained" fullWidth onClick={() => navigate('/login')}>
        Already have an account? Login here
      </WhiteButton>
    </StyledPaper>
  );
};
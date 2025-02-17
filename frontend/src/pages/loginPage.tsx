import React, { useState, useEffect } from 'react';
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

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  // State for form values and error message
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  // Function to check if user is logged in
  const checkLoginStatus = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/Home');
    }
  };

  // Use effect to check login status on component mount
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Handle form submission
  const handleLogin = () => {
    // Basic check for Admin credentials
    if (username === 'Admin' && password === 'Password') {
      // Set login status in local storage
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to dashboard if valid
      navigate('/dashboard');
    } else if (username === 'User' && password === 'UserPassword') {
      // Basic check for User credentials
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/Market');
    } else {
      // Show error message if invalid
      setError(true);
    }
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" sx={{ color: '#ffffff', marginBottom: '20px' }}>
        Login
      </Typography>
      <Box mb={2}>
        <StyledTextField
          variant="outlined"
          fullWidth
          label="Username"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{ sx: { height: '50px' } }}
        />
        <StyledTextField
          variant="outlined"
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{ sx: { height: '50px' } }}
        />
      </Box>
      
      {error && <Typography variant="body2" sx={{ color: 'red', marginBottom: '10px' }}>Invalid username or password!</Typography>}

      <WhiteButton variant="contained" fullWidth onClick={handleLogin}>
        Login
      </WhiteButton>
      <WhiteButton variant="contained" fullWidth onClick={() => navigate('/register')}>
        Don’t have an account? Register Here
      </WhiteButton>
    </StyledPaper>
  );
};

export default LoginPage;
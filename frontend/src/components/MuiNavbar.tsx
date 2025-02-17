import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#000000',
  minHeight: '100px',
});

const StyledToolbar = styled(Toolbar)({
  minHeight: '100px',
  display: 'flex',
  justifyContent: 'center',
});

export const MuiNavbar: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Box display="flex" justifyContent="center" alignItems="center" width="300px">
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {/* Add any text or content here if needed */}
          </Typography>
          <Button color="inherit">Login</Button>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

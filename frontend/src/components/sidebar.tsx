import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Typography, Box, ListItemButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react'; // Import Iconify

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  // Sidebar menu items with Iconify Icons
  const sidebarItems = [
    { text: 'Dashboard', icon: <Icon icon="mdi:dashboard" width="20" height="20" />, onClick: () => navigate('/Dashboard') },
    { text: 'Listings', icon: <Icon icon="mdi:format-list-bulleted" width="20" height="20" />, onClick: () => navigate('/Listings') },
    { text: 'Users', icon: <Icon icon="mdi:account" width="20" height="20" />, onClick: () => navigate('/Users') },
    { text: 'Transactions', icon: <Icon icon="mdi:credit-card" width="20" height="20" />, onClick: () => navigate('/Transactions') },
    { text: 'Analytics', icon: <Icon icon="mdi:chart-line" width="20" height="20" />, onClick: () => navigate('/Analytics') },
    { text: 'Settings', icon: <Icon icon="mdi:cogs" width="20" height="20" />, onClick: () => navigate('/Settings') },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('role');
    navigate('/');
    console.log('Logged out');
  };

  return (
    <>
      <Box sx={{ position: 'fixed', top: 0, right: 0, m: 2, zIndex: 1300 }}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
          <Icon icon="mdi:menu" width="24" height="24" />
        </IconButton>
      </Box>
      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250, display: 'flex', flexDirection: 'column' }}>
          {/* Sidebar Header (e.g., Logo or App Name) */}
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Silk Road Admin</Typography>
          </Box>
          <List>
            {sidebarItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton onClick={item.onClick}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {item.icon} {/* Iconify Icon */}
                    <ListItemText sx={{ ml: 2 }} primary={item.text} />
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />
          <List>
            <ListItem>
              <Button onClick={handleLogout} sx={{
                color:"black",
                '&:hover': {
                  backgroundcolor: "gray"
                }
              }}>
                Logout
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
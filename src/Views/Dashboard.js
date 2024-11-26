import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SignUp from '../zedgo/d/signup';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>


      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
          },
        }}
      >
        <List>
          <ListItem>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Students List" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Batches List" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Broadcast" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Logout" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Help" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <SignUp/>
        {/* Your dashboard content goes here */}
        <Typography variant="h4">Welcome to the Dashboard</Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
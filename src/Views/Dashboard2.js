import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from '@mui/material';

const drawerWidth = 240;

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('students');

  const renderContent = () => {
    switch (selectedTab) {
      case 'students':
        return (
          <Container>
            <h2>Student List</h2>
            <p>This is where you would list students.</p>
          </Container>
        );
      case 'batches':
        return (
          <Container>
            <h2>Batch List</h2>
            <p>This is where you would list batches.</p>
          </Container>
        );
      case 'broadcast':
        return (
          <Container>
            <h2>Broadcast</h2>
            <p>This is where you would manage broadcasts.</p>
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem  onClick={() => setSelectedTab('students')}>
            <ListItemText primary="Student List" />
          </ListItem>
          <ListItem onClick={() => setSelectedTab('batches')}>
            <ListItemText primary="Batch List" />
          </ListItem>
          <ListItem onClick={() => setSelectedTab('broadcast')}>
            <ListItemText primary="Broadcast" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px' }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Dashboard;

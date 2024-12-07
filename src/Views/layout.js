import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, Box, IconButton, useMediaQuery } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import DashBoard from './list'; // Adjust the path as needed
import { Outlet } from 'react-router-dom';
import PopupComponent from './Popup';
import './dash.css'; // Ensure your CSS is modular and scoped properly

const Layout = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)'); // Adjust breakpoint as needed

  const handlePopupOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopupClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevOpen) => !prevOpen);
  };

  const drawerContent = (
    <Box sx={{ overflow: 'auto', height: '100%' }}>
      <Box
        sx={{
          borderBottom: '2px solid #3D3D4E',
          textAlign: 'center',
          py: 2,
          backgroundColor: '#2A2927',
        }}
      >
        <Typography variant="h4" noWrap sx={{ color: 'white' }}>
          ZedGoo
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: '#FFFFFFB3', py: 2, '&:hover': { backgroundColor: '#FFFFFF33' } }}
        >
          MAIN MENU
        </Typography>
      </Box>
      <DashBoard /> {/* Ensure this component renders valid menu items */}
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#F5F5F5' }}>
      {/* Drawer Section */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Better mobile performance
          sx={{
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              backgroundColor: '#2A2927',
              color: 'white',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: 'border-box',
              backgroundColor: '#2A2927',
              color: 'white',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Main Content Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {/* AppBar Section */}
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: '#DCDCDC',
            height: '50px',
            boxShadow: 'none',
            borderBottom: '1px solid #CCCCCC',
          }}
        >
          <Toolbar
            sx={{
              minHeight: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Box sx={{ flexGrow: 1 }} />
            <IconButton sx={{ color: 'black' }}>
              <MessageIcon />
            </IconButton>
            <IconButton sx={{ color: 'black' }}>
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'black' }}
              onClick={handlePopupOpen}
              aria-label="user account options"
            >
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box
          sx={{
            flexGrow: 1,
            transition: 'filter 0.3s',
            filter: anchorEl ? 'blur(5px)' : 'none',
            p: 2,
            overflowY: 'auto',
          }}
        >
          <Outlet /> {/* Nested routes render here */}
        </Box>
      </Box>

      {/* Popup Component */}
      <PopupComponent anchorEl={anchorEl} handleClose={handlePopupClose} />
    </Box>
  );
};

export default Layout;

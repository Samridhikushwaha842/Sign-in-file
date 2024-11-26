import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
// import image from './image.png';

const SignUp = () => {
  const handleLogin = () => {
    // Redirect to the dashboard page
    window.location.href = '/app';
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Sign-In Form Container */}
      <Box
        width={'70%'}
        height={'70vh'}
        display={'flex'}
        flexDirection={'row'}
        sx={{
          marginLeft: '15%',
          marginTop: '5%',
          border: '1px solid grey',
          borderRadius: '10px',
          backgroundColor: '#ffffff',
          zIndex: 1,
        }}
      >
        {/* TextField */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            width: '50%',
            height: '100px',
            marginLeft: '70px',
            marginTop: '70px',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Sign In
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            to access ZedGoo
          </Typography>

          <TextField
            label="Email"
            variant="standard"
            fullWidth
            margin="normal"
            placeholder="Your email address..."
          />
          <TextField
            label="Password"
            variant="standard"
            fullWidth
            margin="normal"
            placeholder="Your first name and last name ..."
            type="password"
          />
          <Typography
            variant="body2"
            sx={{ marginTop: 1, marginBottom: 3, color: 'black', cursor: 'pointer' }}
          >
            Forgot your password?
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#333',
              color: '#fff',
              width: '50%',
              marginLeft: '25%',
              marginTop: 3,
            }}
            onClick={handleLogin} // Attach the login handler
          >
            Log in
          </Button>
        </Box>

        {/* Image Field */}
        <Box
          sx={{
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%',
            borderRadius: '0px 10px 10px 0px',
            alignItems: 'center',
          }}
        >
          <Box>
            <img
              // src={image}.
              alt="ZedGoo Logo"
              style={{ width: '8rem', marginBottom: 14, marginLeft: 22 }}
            />
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              ZedGoo
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography mt={1} sx={{ fontSize: '12px', marginLeft: '40%', marginTop: 4 }}>
        © 2024, Eimple Labs Pvt. Ltd. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default SignUp;

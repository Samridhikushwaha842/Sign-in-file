import React from 'react';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import image from './image.png';

import SigninTheme from '../CSS/SignIn/SigninTheme';

const SignIn = () => {

  const theme = useTheme();
  const styles = SigninTheme(theme);

  const handleLogin = () => {
    // Redirect to the dashboard page
    window.location.href = '/dashboard';
  };

  return (
    <Box sx={styles.container}>
      {/* Sign-In Form Container */}
      <Box
        sx={styles.formContainer}
      >
        {/* TextField */}
        <Box
          sx={styles.textFieldSection}
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
            sx={styles.forgotPassword}
          >
            Forgot your password?
          </Typography>
          <Button
            variant="contained"
            sx={styles.loginButton}
            onClick={handleLogin} // Attach the login handler
          >
            Log in
          </Button>
        </Box>

        {/* Image Field */}
        <Box
          sx={styles.imageSection}
        >
          <Box>
            <img
              src={image}
              alt="ZedGoo Logo"
              style={styles.logoImage}
            />
            <Typography variant="h3" sx={styles.logoText}>
              ZedGoo
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography mt={1} sx={styles.footerText}>
        © 2024, Eimple Labs Pvt. Ltd. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default SignIn;

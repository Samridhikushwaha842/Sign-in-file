import { Button, FormLabel, Stack, TextField } from '@mui/material'; 
import { useState } from 'react';
import {img } from '@mui/icons-material';

export default function BoxSystemProps() {
  // State variables for storing email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault();
    
    // Replace with actual login logic
    console.log('Email:', email); 

    // Replace with actual login logic
    console.log('Password:', password);

    // Reset the form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <Stack
      height={600}
      width={1300}
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
      sx={{ border: '2px solid grey', borderRadius: '6px' }}
    >
      {/* Left Stack for the form */}
      <Stack 
        style={{
          borderRight: '3px solid grey',
          width: '60%',
          height: '100%',
          boxShadow: '2px 0px 10px black',
          boxSizing: 'border-box',
          padding: '5px'
        }}
      >
        <form onSubmit={handleSubmit} style={{ marginLeft: '50px', marginTop: '10px' }}>
          <h1>Sign In</h1>
          <p>to access ZedGoo</p>

          <FormLabel><b>Email</b></FormLabel><br />
          <TextField
            style={{ width: '50%' }}
            sx={{ outline: 'none', borderColor:'white' }}
            placeholder='Your email address....'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          /><br />

          <FormLabel><b>Password</b></FormLabel><br />
          <TextField
            style={{ width: '50%' }}
            placeholder='Your password...'
            type="password" // Hide password input
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password on change
            required // Ensure field is not empty
          /><br />  

          <FormLabel>
            <a href="#" style={{ textDecoration: 'none'}}>Forgot your password?</a>
          </FormLabel><br />

          <Button
            type="submit"
            variant="contained"
            sx={{ color: 'white', backgroundColor: 'black', padding: '12px 100px', marginLeft: '70px' }}
          >
            Log In
          </Button>
        </form>
      </Stack>

      {/* Right Stack for the logo */}
      <Stack
        justifyContent="center"
        alignItems="center"
        style={{
          width: '40%',
          height: '100%',
          backgroundColor: '#f5f5f5',
          boxSizing: 'border-box',
          padding: '20px'
        }}
      >
        <img
          src="/logo/.png" // Update this path to your actual logo location
          alt="ZedGoo Logo"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </Stack>
    </Stack>
  );
}

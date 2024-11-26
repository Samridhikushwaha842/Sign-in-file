import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignIn from './Views/SignIn';
import SignUp from './Views/SignUp'; // Import SignUp
import Dashboard from './Views/Dashboard';
import Dashboard2 from './Views/Dashboard2'; // Ensure Dashboard2 is imported
import StudentList from './Views/StudentList'; // Make sure to import correctly

const theme = createTheme({
  palette: {
    success: {
      main: '#ff0000',
    },
    primary: {
      main: '#4ADBD1',
    },
    secondary: {
      main: '#FFFFFF', // Corrected to include a hex code for white
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
           {/* Set signup as the landing page */}
        <Routes>
          <Route path="/" element={<SignUp />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/students" element={<StudentList />} />
          {/* Optional: Redirect from any unknown paths to the signup page */}
          <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

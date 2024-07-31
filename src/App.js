import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignIn from './Views/SignIn';       
//import Dashboard2 from './Views/Dashboard2';
import Dashboard from './Views/Dashboard';


const theme = createTheme({
  palette: {
    success: {
      main: '#ff0000',
    },
    primary: {
      main: '#4ADBD1'
    },
    secondary: {
      main: '#FFFF'
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <>
          <Routes >
             <Route path="/" element={<SignIn />} /> 
            {/* <Route path='/' element= {<Dashboard2/>} /> */}
            {/* <Route path="/" element={<Dashboard />} /> */}
          </Routes>
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;



// src/Dash.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Paper, Container, ButtonGroup, Button, Select, MenuItem, Grid } from '@mui/material';
import Notifications from './notification';
import BasicDateCalendar from './calender';
import './dash.css';
const Dash = () => {
  const [activeButton, setActiveButton] = useState('Year');

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>DASHBOARD</Typography>
      <Container sx={{marginLeft:-3,padding:1}}>
        <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="nowrap" sx={{padding: 0,margin:0 }} className="dashboard-header">
          <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ marginRight: 2, border: '1px solid black' }} className="button-group">
            {['Year', 'Month', 'Week', 'Day'].map((label) => (
              <Button
                key={label}
                onClick={() => handleClick(label)}
                sx={{
                  backgroundColor: activeButton === label ? 'black' : 'transparent',
                  color: activeButton === label ? 'white' : 'black',
                  '&:hover': { backgroundColor: activeButton === label ? 'black' : 'rgba(0, 0, 0, 0.04)' },
                }}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
          <TextField id="from-date" label="From Date" type="date" InputLabelProps={{ shrink: true }} className="date-field" sx={{ marginRight: 2, minWidth: 120, '& .MuiInputBase-root': { height: '40px' } }} />
          <TextField id="to-date" label="To Date" type="date" InputLabelProps={{ shrink: true }} className="date-field" sx={{ marginRight: 2, minWidth: 120, '& .MuiInputBase-root': { height: '40px' } }} />
          <Select id="select-batch" displayEmpty defaultValue="" sx={{ marginRight: 2, minWidth: 150, height: 40 }} className="select-batch">
            <MenuItem value="">Select batch</MenuItem>
            <MenuItem value={10}>Batch 1</MenuItem>
            <MenuItem value={20}>Batch 2</MenuItem>
          </Select>
          <Box sx={{ display:'flex', alignItems: 'center',justifyContent:'center' }}>
            <Typography>Search : </Typography>
            <TextField variant="outlined" type="search" className="search-field" sx={{ marginRight: 2, minWidth: 200, '& .MuiInputBase-root': { height: '40px' } }} />
          </Box>
        </Box>
      </Container>
      <Box className="dashboard-container">
        <Paper className="paper-item">
          <Typography>No. Of Batches</Typography>
          <Typography variant="body1">454</Typography>
        </Paper>
        <Paper className="paper-item">
          <Typography>Active Students</Typography>
          <Typography variant="body1">424</Typography>
        </Paper>
        <Paper className="paper-item">
          <Typography>Total Students</Typography>
          <Typography variant="body1">454</Typography>
        </Paper>
        <Paper className="paper-item">
          <Typography>Total Queries</Typography>
          <Typography variant="body1">52</Typography>
        </Paper>
        <Paper className="paper-item">
          <Typography>Active Queries</Typography>
          <Typography variant="body1">26</Typography>
        </Paper>
        <Paper className="paper-item">
          <Typography>Resolved Queries</Typography>
          <Typography variant="body1">26</Typography>
        </Paper>
        <Paper className="paper-item">
          <Typography>Total Time Served</Typography>
          <Typography variant="body1">20 hrs 52 mins 59 secs</Typography>
        </Paper>
      </Box>
      <Grid container spacing={3} sx={{ marginTop: 1 }}>
        <Grid item xs={12} md={8}>
          <Notifications sx={{ padding: .5, border: '1px solid black', width: '100%' }} className="notifications-container" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: .5 }}>
            <BasicDateCalendar />
          </Paper>
        </Grid>
      </Grid>
    </Box>

    
  );
};

export default Dash;

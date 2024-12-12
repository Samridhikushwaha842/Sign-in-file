import React, { useState } from 'react';
import {Typography, Box, Popover, Switch, FormControlLabel } from '@mui/material';

const PopupComponent = ({ anchorEl, handleClose }) => {
  const [checked, setChecked] = useState(false);
  const [label, setLabel] = useState('Enable');
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
    setLabel(event.target.checked ? 'Disable' : 'Enable');
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" component="div">
          Account Setting
        </Typography>
        <Typography variant="subtitle1" fontWeight={'bold'} gutterBottom>
          Auto Share
        </Typography>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleSwitchChange} />}
          label={label}
        />
      </Box>
    </Popover>
  );
};
export default PopupComponent
import React from 'react';
import { Box, Typography, Paper, Avatar, Grid, useTheme } from '@mui/material';
import MessageDetailsStyles from '../CSS/Broadcast/MessageDetailsStyles';

const MessageDetails = ({ message }) => {
  const theme = useTheme();
  const styles = MessageDetailsStyles(theme);

  return (
    <Paper sx={styles.paper}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar src={message.avatar} alt={message.name} sx={styles.avatar} />
        </Grid>
        <Grid item>
          <Typography variant="h6">{message.name}</Typography>
          <Typography variant="body2" sx={styles.timestamp}>
            Timestamp: 23:24
          </Typography>
        </Grid>
      </Grid>
      <Box sx={styles.description}>
        <Typography variant="body1">{message.description}</Typography>
      </Box>
    </Paper>
  );
};

export default MessageDetails;

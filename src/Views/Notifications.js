import * as React from 'react';
import { Typography, Grid, FormControl, FormControlLabel, FormGroup, Checkbox, Box, useTheme } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsStyles from '../CSS/Notifications/NotificationsTheme';

const Notifications = () => {
  const theme = useTheme();
  const styles = NotificationsStyles(theme);

  return (
    <Grid container spacing={1} sx={styles.container}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={styles.title}>Notifications</Typography>
        <Box sx={styles.divider}></Box>
        <FormControl component="fieldset" variant="standard" sx={styles.formControl}>
          <FormGroup sx={styles.formGroup}>
            {[
              { label: <Box display="flex" alignItems="center"><Typography>Title</Typography><UnfoldMoreIcon fontSize="7px" /></Box> },
              { label: "You can't compress the program without quantifying the open-source SSL certificate" },
              { label: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!" },
              { label: "We need to bypass the neural TCP card!" },
              { label: "The SAS interface is down, bypass the open-source so we can backup the mainframe." },
              { label: "I'll parse the wireless SSL protocol, that should drive the API panel!" },
              { label: "Use the digital TLS panel, then you can transmit the haptic system!" },
              { label: "The UTF8 application is down, parse the neural bandwidth so we can parse the exabyte!" },
              { label: "Generating the driver won't do anything, we need to quantify the pixels in 1080p!" }
            ].map((item, index) => (
              <Box key={index} sx={styles.notificationItem}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box sx={styles.notificationLabel}>
                      <Typography sx={{ flexGrow: 1 }}>{item.label}</Typography>
                    </Box>
                  }
                />
                <MoreHorizIcon sx={styles.moreIcon} />
              </Box>
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}
  export default  Notifications;
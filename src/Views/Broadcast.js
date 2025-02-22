import React from 'react';
import { Box, Paper, Typography, Avatar, IconButton, Input, useTheme } from '@mui/material';
import { Send, AttachFile, Mic, QuestionAnswer } from '@mui/icons-material';
import BroadcastStyles from '../CSS/Broadcast/BroadcastTheme';

const messages = [
  {
    name: "Piyush Kumar",
    description: "Lorem ipsum dolor sit amet consectetur. Sit a et quis lacinia mattis tellus aliquam molestie non.",
    avatar: "path_to_avatar_image",
    time: "23:24",
  },
  {
    name: "Piyush Kumar",
    description: "Lorem ipsum dolor sit amet consectetur. Sit a et quis lacinia mattis tellus aliquam molestie non.",
    avatar: "path_to_avatar_image",
    time: "23:24",
  },
  {
    name: "Piyush Kumar",
    description: "Lorem ipsum dolor sit amet consectetur. Sit a et quis lacinia mattis tellus aliquam molestie non.",
    avatar: "path_to_avatar_image",
    time: "23:24",
  },
];

const MessageCard = ({ message, styles }) => (
  <Paper sx={styles.messageCard}>
    <Avatar src={message.avatar} alt={message.name} sx={styles.avatar} />
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        {message.name}
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 1 }}>
        {message.description}
      </Typography>
    </Box>
  </Paper>
);

const BroadCast = () => {
  const theme = useTheme();
  const styles = BroadcastStyles(theme);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
      <Box sx={styles.messageContainer}>
        {messages.map((message, index) => (
          <Box key={index} sx={{ display: 'flex', marginBottom: 2 }}>
            <Box sx={{ width: '85%' }}>
              <MessageCard message={message} styles={styles} />
            </Box>
            <Box sx={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
              <IconButton sx={styles.iconButton}>
                <QuestionAnswer fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={styles.rightPanel}>
        {messages.map((message, index) => (
          <MessageCard key={index} message={message} styles={styles} />
        ))}
        <Box sx={styles.replyBox}>
          <Input placeholder="Reply" sx={{ flex: 1, paddingLeft: 2 }} disableUnderline />
          <IconButton><AttachFile /></IconButton>
          <IconButton><Mic /></IconButton>
          <IconButton><Send /></IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default BroadCast;

const BroadcastStyles = (theme) => ({
    messageCard: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      marginRight: theme.spacing(2),
    },
    messageContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
    },
    replyBox: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: '63px',
      backgroundColor: 'white',
      marginTop: theme.spacing(2),
      padding: theme.spacing(1),
    },
    rightPanel: {
      width: '40%',
      backgroundColor: '#E0E0E0',
      borderRadius: '10px',
      padding: theme.spacing(2),
    },
    iconButton: {
      marginBottom: theme.spacing(2),
    },
  });
  
  export default BroadcastStyles;
  
const NotificationsStyles = (theme) => ({
    container: {
      borderRadius: '5px',
      marginLeft: '2px',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 1)',
    },
    title: {
      marginLeft: '1rem',
    },
    divider: {
      width: '100%',
      height: '2px',
      backgroundColor: 'black',
    },
    formControl: {
      marginTop: '1rem',
    },
    formGroup: {
      marginLeft: '1rem',
    },
    notificationItem: {
      border: '1px solid #CFCECE',
      borderRadius: '4px',
      padding: '0 0.3rem',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: '#CFCECE',
      },
    },
    notificationLabel: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '42rem',
      alignItems: 'center',
    },
    moreIcon: {
      position: 'absolute',
      right: '8px',
      marginLeft: 2,
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
      padding: '2px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  });
  
  export default NotificationsStyles;
  
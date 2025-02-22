const SideMenuStyles = (theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '78vh',
      fontFamily: 'roboto',
    },
    link: {
      display: 'block',
      color: 'white',
      textDecoration: 'none',
      width: '100%',
    },
    getListItemStyle: (path, location) => ({
      backgroundColor: location.pathname === path ? '#FFFFFF80' : 'transparent',
      '&:hover': {
        backgroundColor: location.pathname === path ? '#FFFFFF50' : '#FFFFFF80',
      },
      paddingLeft: 4,
    }),
  });
  
  export default SideMenuStyles;
  
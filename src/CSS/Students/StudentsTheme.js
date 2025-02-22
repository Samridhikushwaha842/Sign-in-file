const StudentStyles = (theme) => ({
    container: {
      fontSize: 4,
    },
    studentListContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    detailsContainer: {
      borderRadius: '5px',
      marginLeft: '1.5rem',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 1)',
      padding: 3,
      width: '35%',
      backgroundColor: '#DCDCDC',
      display: 'flex',
      flexDirection: 'column',
    },
    studentHeader: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      paddingBottom: 1,
      marginBottom: 1,
      borderBottom: '2px solid #9C9C9C',
      width: '80%',
      alignSelf: 'center',
    },
    avatar: {
      width: 80,
      height: 80,
      marginBottom: 2,
    },
  });
  
  export default StudentStyles;
  
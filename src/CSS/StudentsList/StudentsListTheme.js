const StudentsListStyles = (theme) => ({
    container: {
      borderRadius: '5px',
      marginLeft: '2px',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 1)',
      padding: 2,
      width: '65%',
    },
    cellStyle: {
      paddingTop: '0px',
      paddingBottom: '0px',
    },
    eyeStyle: {
      cursor: 'pointer',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
      padding: '3px',
      borderRadius: '5px',
    },
    tableContainer: {
      marginTop: 1,
    },
    tableRowEven: {
      backgroundColor: '#DCDCDC',
    },
    tableRowOdd: {
      backgroundColor: 'white',
    },
    avatar: {
      width: '30px',
      height: '30px',
    },
    loadMoreButton: {
      textAlign: 'center',
      marginTop: 2,
    },
  });
  
  export default StudentsListStyles;
  



const BatchInfoTheme = (theme) => ({
   container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 2,
      marginLeft: -2,
   },

   paperBox: {
      padding: 1,
      backgroundColor: '#f0f0f0',
      width: '57%',
      height: 40,
      display: 'flex',
      alignItems: 'center',
   },

   homeIcon: {
      marginLeft: 1,
      backgroundColor: 'white',
   },

   homeIconInner: {
      color: 'black',
      borderRadius: '50%',
   },

   switch: {
      marginLeft: 1,
      marginRight: 2,
      '& .MuiSwitch-switchBase': {
         color: '#3C9D00',
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
         color: '#F24E1E',
      },
      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
         backgroundColor: '#FFFFFF',
         boxShadow: '-2px -2px 6px grey',
      },
      '& .MuiSwitch-track': {
         backgroundColor: '#FFFFFF',
         boxShadow: '2px 2px 6px grey',
      },
   },

   select: {
      marginRight: 2,
      minWidth: 500,
      backgroundColor: 'white',
      height: 40,
   },

   statBox: {
      padding: 1,
      backgroundColor: '#f0f0f0',
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
});

export default BatchInfoTheme;

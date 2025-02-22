// import React, { useState } from 'react';
// import { Box, Paper, Switch, Select, MenuItem, Typography, IconButton, useTheme } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';

// // import css theme from css file
// import BatchInfoTheme from '../CSS/BatchInfo/BatchInfoTheme';



// const BatchInfo = ({ showHomeIcon, onSelectBatch }) => {
//   const [toggleChecked, setToggleChecked] = useState(true);
//   const [selectedBatch, setSelectedBatch] = useState('');

//   const theme = useTheme();
//   const styles = BatchInfoTheme(theme)

//   const handleToggleChange = (event) => {
//     setToggleChecked(event.target.checked);
//   };

//   const handleBatchChange = (event) => {
//     setSelectedBatch(event.target.value);
//     if (onSelectBatch) {
//       onSelectBatch(event.target.value);
//     }
//   };
//   // { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2, marginLeft: -2 }

//   return (
//     <Box sx={styles.container}
//     >
//       <Paper sx={styles.paperBox}>
//         {showHomeIcon && (
//           <IconButton sx={{ marginLeft: 1, backgroundColor: 'white' }}>
//             <HomeIcon sx={{ color: 'black', borderRadius: '50%' }} />
//           </IconButton>
//         )}
//         <Switch
//           checked={toggleChecked}
//           onChange={handleToggleChange}
//           color="primary"
//           sx={{
//             marginLeft: 1,
//             marginRight: 2,
//             '& .MuiSwitch-switchBase': {
//               color: '#3C9D00',
//             },
//             '& .MuiSwitch-switchBase.Mui-checked': {
//               color: '#F24E1E',
//             },
//             '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
//               backgroundColor: '#FFFFFF',
//               boxShadow: '-2px -2px 6px grey',
//             },
//             '& .MuiSwitch-track': {
//               backgroundColor: '#FFFFFF',
//               boxShadow: '2px 2px 6px grey',
//             },
//           }}
//         />
//         <Select
//           id="select-batch"
//           value={selectedBatch}
//           onChange={handleBatchChange}
//           displayEmpty
//           sx={{ marginRight: 2, minWidth: 500, backgroundColor: 'white', height: 40 }}
//         >
//           <MenuItem value="">Select batch</MenuItem>
//           <MenuItem value={'ZX10R'}>ZX10R</MenuItem>
//           <MenuItem value={'R15'}>R15</MenuItem>
//           <MenuItem value={'220CC'}>220CC</MenuItem>
//           <MenuItem value={40}>Batch 4</MenuItem>
//         </Select>
//       </Paper>
//       <Paper sx={{ padding: 1, backgroundColor: '#f0f0f0', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <Box textAlign="center">
//           <Typography>Total Students</Typography>
//           <Typography fontWeight="bold">454</Typography>
//         </Box>
//       </Paper>
//       <Paper sx={{ padding: 1, backgroundColor: '#f0f0f0', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <Box textAlign="center">
//           <Typography>Active Students</Typography>
//           <Typography fontWeight="bold">424</Typography>
//         </Box>
//       </Paper>
//       <Paper sx={{ padding: 1, backgroundColor: '#f0f0f0', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <Box textAlign="center">
//           <Typography>Active Queries</Typography>
//           <Typography fontWeight="bold">26</Typography>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default BatchInfo;



import React, { useState } from 'react';
import { Box, Paper, Switch, Select, MenuItem, Typography, IconButton, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BatchInfoTheme from '../CSS/BatchInfo/BatchInfoTheme';

const BatchInfo = ({ showHomeIcon, onSelectBatch }) => {
  const [toggleChecked, setToggleChecked] = useState(true);
  const [selectedBatch, setSelectedBatch] = useState('');

  const theme = useTheme();
  const styles = BatchInfoTheme(theme);

  const handleToggleChange = (event) => {
    setToggleChecked(event.target.checked);
  };

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
    if (onSelectBatch) {
      onSelectBatch(event.target.value);
    }
  };

  return (
    <Box sx={styles.container}>
      <Paper sx={styles.paperBox}>
        {showHomeIcon && (
          <IconButton sx={styles.homeIcon}>
            <HomeIcon sx={styles.homeIconInner} />
          </IconButton>
        )}
        <Switch
          checked={toggleChecked}
          onChange={handleToggleChange}
          color="primary"
          sx={styles.switch}
        />
        <Select
          id="select-batch"
          value={selectedBatch}
          onChange={handleBatchChange}
          displayEmpty
          sx={styles.select}
        >
          <MenuItem value="">Select batch</MenuItem>
          <MenuItem value="ZX10R">ZX10R</MenuItem>
          <MenuItem value="R15">R15</MenuItem>
          <MenuItem value="220CC">220CC</MenuItem>
          <MenuItem value={40}>Batch 4</MenuItem>
        </Select>
      </Paper>

      {[
        { label: 'Total Students', value: 454 },
        { label: 'Active Students', value: 424 },
        { label: 'Active Queries', value: 26 },
      ].map((item, index) => (
        <Paper key={index} sx={styles.statBox}>
          <Box textAlign="center">
            <Typography>{item.label}</Typography>
            <Typography fontWeight="bold">{item.value}</Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default BatchInfo;

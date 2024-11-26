import {Box,  Stack, Typography,Avatar } from "@mui/material";
import logo from './image.png'


const ZedGo = () => {
    return(
        
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' ,backgroundColor:'GrayText',height:'100vh'}}>
             <Box sx={{color:'white'}}>
            <Stack sx={{
                display:'flex',
                flexDirection:'row'
            }}>

            <Avatar sx={{width:'70px',height:'70px'}} alt="Remy Sharp" src={logo}  />

                <Typography fontSize={50}>
                   
                    ZedGoo
                    
                </Typography>
            </Stack>
                <Typography ml={20}>connecting...</Typography>

        </Box>
        </Box>
                
    )
  };
  
export default ZedGo;


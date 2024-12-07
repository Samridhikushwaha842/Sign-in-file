import { Box, Stack, Typography, Avatar } from "@mui/material";
import some from './d/some.png'
import SignUp from "./d/signup";
import { useState, useEffect } from "react";

const ZedGo = () => {
  // State to manage whether to show the SignUp component
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    // Trigger the timeout to show the SignUp component
    const timer = setTimeout(() => {
      setShowSignUp(true);
    }, 1000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  // If showSignUp is true, render the SignUp component
  if (showSignUp) {
    return <SignUp />;
  }

  // Otherwise, render the loading screen
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "GrayText",
        height: "100vh",
      }}
    >
      <Box sx={{ color: "white" }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Avatar sx={{ width: "70px", height: "70px" }} alt="Remy Sharp" src={some} />
          <Typography fontSize={50}>ZedGoo</Typography>
        </Stack>
        <Typography ml={20}>connecting...</Typography>
      </Box>
    </Box>
  );
};

export default ZedGo;

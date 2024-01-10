import React from "react";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import Login from "@/components/Login/Login";
const SignIn = () => {
  const { data: session } = useSession();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>{session?"Thank you for signing in":"Please Sign In"}</h2>
      <Login/>
    </Box>
  );
};

export default SignIn;

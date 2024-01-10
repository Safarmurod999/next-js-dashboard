import { Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

import React from "react";

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Button variant="contained" color="error" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button variant="contained" color="success" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default Login;

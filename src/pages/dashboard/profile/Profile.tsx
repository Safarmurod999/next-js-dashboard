import React, { FormEvent, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  const names = session?.user?.name ? session.user.name.split(" ") : [];
  const firstName = names[0];
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  const emailAddress = session?.user?.email;
  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: emailAddress,
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });
  const handleFormChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));
  };
  const handleSubmit = (event:React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <h1>Profile</h1>
      <Box>
        <Paper sx={{ padding: "1rem 2rem" }}>
          <Grid container justifyContent={"center"} spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Avatar
                  sx={{ height: 100, width: 100, marginBottom: 2 }}
                  src={session?.user?.image as string}
                />
              </Box>
              <form
                onSubmit={handleSubmit}
                style={{ maxWidth: 600, margin: "0 auto" }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstname"
                      value={formData.firstName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastname"
                      value={formData.lastName}
                      onChange={handleFormChange}
                    />
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="confirm password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="receiveEmails"
                          checked={formData.receiveEmails}
                          onChange={handleFormChange}
                          color="primary"
                        />
                      }
                      label={"Receive sales analytics email"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Save changes
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Profile;

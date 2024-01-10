import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import scss from "./Dashboard.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay/TransactionsPerDay";
import TransactionsBottomRow from "@/components/Dashboard/TransactionsBottomRow/TransactionsBottomRow";
import Footer from "@/components/Footer/Footer";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={2} marginTop={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>
      <TransactionsBottomRow />
      <Footer/>
    </Box>
  );
};

export default Dashboard;

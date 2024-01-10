import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import scss from "./TransactionsBottomRow.module.scss";
import DataChart from "@/components/DataChart/DataChart";
import { donutChartData } from "@/components/mockData";
const TransactionsBottomRow = () => {
  return (
    <Grid container className={scss.bottomRow}>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type="doughnut" data={donutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type="doughnut" data={donutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type="doughnut" data={donutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type="doughnut" data={donutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionsBottomRow;

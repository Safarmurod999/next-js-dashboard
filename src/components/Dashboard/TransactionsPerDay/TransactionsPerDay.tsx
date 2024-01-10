import React from "react";
import { useTheme } from "@mui/system";
import {
  Paper,
  Typography,
  Tooltip,
  IconButton,
  Grid,
  Card,
} from "@mui/material";
import scss from "./TransactionsPerDay.module.scss";
import DataCard from "../DataCard/DataCard";
import { lineChartData } from "@/components/mockData";
import DataChart from "@/components/DataChart/DataChart";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};
export type TransactionsPerDayProps = {
  data?: TransactionCardType;
};
const TransactionsPerDay = ({ data }: TransactionsPerDayProps) => {
  const theme = useTheme();
  return (
    <Grid container gap={2} className={scss.wrapper}>
      <Paper className={scss.transactions}>     
        <div className={scss.chart}>
          <Typography>Transactions Per Day</Typography>
          <DataChart type={"line"} data={lineChartData}/>
        </div>
        <div className={scss.cardWrapper}>
          <Card className={scss.card} variant="outlined">
            <div className={scss.cardTitle}>
              <Typography>Total Products</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography>1.275</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                428.7%
              </Typography>
            </div>
          </Card>
          <Card className={scss.card} variant="outlined">
            <div className={scss.cardTitle}>
              <Typography>Buy to detail</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography>4.40%</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                899.7%
              </Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={"outlined"}>
            <div className={scss.cardTitle}>
              <Typography>Refunds</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography>0</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                0
              </Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default TransactionsPerDay;

import React from "react";
import DataCard from "../DataCard";
import { Paper, Typography, Tooltip, IconButton, Grid } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import scss from "./DataRibbon.module.scss"
const DataRibbon = () => {
  return (
    <Grid container gap={2} className={scss.dataRibbon}>
      <Grid>
        <DataCard
          title="Total Sales"
          value="462"
          description="The totals of all DataSoft products in the current financial year"
        />
      </Grid>
      <Grid>
        <DataCard title="Total Value" value="$25732.53" description="The total sales of the current financial year"/>
      </Grid>
      <Grid>
        <DataCard title="Avg. Order Value" value="$159.30" description="The average order value of all sales this current financial year"/>
      </Grid>
      <Grid>
        <DataCard title="Conversion Rate" value="0.61%" description="How many nitches become sales"/>
      </Grid>
    </Grid>
  );
};

export default DataRibbon;

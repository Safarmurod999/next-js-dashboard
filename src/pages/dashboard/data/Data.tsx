import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import LinearProgress from "@mui/material/LinearProgress";

const Data = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 50,
    maxColumns: 15,
  });
  return (
    <>
      <h1>Data</h1>

      <p>
        The best of data available here at your finger tips in table form.This
        could be a whole section of data that is available for users to deep
        drive further into the number/stats
      </p>
      <div>
        <DataGrid
          slots={{ loadingOverlay: LinearProgress }}
          loading={!data}
          {...data}
        />
      </div>
    </>
  );
};

export default Data;

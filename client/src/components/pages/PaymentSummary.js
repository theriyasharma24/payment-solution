import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

const PaymentSummary = () => {
  function createData(dop, name, amount, status) {
    return { dop, name, amount, status };
  }

  const rows = [
    createData("14-01-2022 | 8:00 PM", "Riya Sharma", 1000, "Paid"),
    createData("24-01-2022 | 9:00 PM", "Akshta", 2000, "Paid"),
    createData("03-01-2022 | 8:00 PM", "Riya Sharma", 1000, "Paid"),
  ];
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={24} md={0}>
            <Typography variant="h3" component="h2">
              Overview
            </Typography>
          </Grid>
          <Grid
            item
            style={{ backgroundColor: "lightblue", textAlign: "center" }}
            xs={12}
            md={4}
          >
            <p>Net Income</p>
            <p>₹ 10000/-</p>
            <p>2 clients</p>
          </Grid>
          <Grid
            item
            style={{ backgroundColor: "pink", textAlign: "center" }}
            xs={12}
            md={4}
          >
            <p>Paid</p>
            <p>₹ 10000/-</p>
            <p>2 clients</p>
          </Grid>
          <Grid
            item
            style={{ backgroundColor: "lightgreen", textAlign: "center" }}
            xs={12}
            md={4}
          >
            <p>Amount Pending</p>
            <p>₹ 10000/-</p>
            <p>2 clients</p>
          </Grid>
        </Grid>
      </Box>

      <br></br>
      <Typography variant="h3" component="h2">
        Earning History
      </Typography>
      <br></br>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date of Payment</TableCell>
              <TableCell align="left">Client Name</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="right">Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell scope="row">{row.dop}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">₹{row.amount}/-</TableCell>
                <TableCell align="right"> {row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default PaymentSummary;

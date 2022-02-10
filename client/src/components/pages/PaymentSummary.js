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
import colors from "../../essentials/colors";

const PaymentTableCell = styled(TableCell)`
  && {
    font-weight: 900;
    background: rgba(149, 213, 84);
    font-size: 18px;
  }
`;
const PaymentBodyTableCell = styled(TableCell)`
  && {
    font-weight: 300;
    background: rgba(149, 213, 84, 0.5);
    font-size: 18px;
  }
`;

const NetIncome = styled(Paper)`
  && {
    border: 4px solid ${colors.purple};
    background: rgba(182, 88, 255, 0.4);
    border-radius: 10px;
    box-shadow: 4px 5px 5px ${colors.grey};
  }
`;
const AmountPaid = styled(Paper)`
  && {
    border: 4px solid ${colors.darkgreen};
    background: rgba(0, 128, 0, 0.3);
    border-radius: 10px;
    box-shadow: 4px 5px 5px ${colors.grey};
  }
`;

const AmountPending = styled(Paper)`
  && {
    border: 4px solid ${colors.darkred};
    background: rgba(182, 37, 37, 0.4);
    border-radius: 10px;
    box-shadow: 4px 5px 5px ${colors.grey};
  }
`;

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
          <Grid item style={{ textAlign: "center" }} xs={12} md={4}>
            <NetIncome elevation={3} style={{ padding: 15 }}>
              <p>Net Income</p>
              <p>₹ 10000/-</p>
              <p>2 clients</p>
            </NetIncome>
          </Grid>

          <Grid item style={{ textAlign: "center" }} xs={12} md={4}>
            <AmountPaid elevation={3} style={{ padding: 15 }}>
              <p>Amount Paid</p>
              <p>₹ 10000/-</p>
              <p>2 clients</p>
            </AmountPaid>
          </Grid>
          <Grid item style={{ textAlign: "center" }} xs={12} md={4}>
            <AmountPending elevation={9} style={{ padding: 15 }}>
              <p>Amount Pending</p>
              <p>₹ 10000/-</p>
              <p>2 clients</p>
            </AmountPending>
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
              <PaymentTableCell>Date of Payment</PaymentTableCell>
              <PaymentTableCell align="left">Client Name</PaymentTableCell>
              <PaymentTableCell align="left">Amount</PaymentTableCell>
              <PaymentTableCell align="right">Payment Status</PaymentTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <PaymentBodyTableCell scope="row">
                  {row.dop}
                </PaymentBodyTableCell>
                <PaymentBodyTableCell align="left">
                  {row.name}
                </PaymentBodyTableCell>
                <PaymentBodyTableCell align="left">
                  ₹{row.amount}/-
                </PaymentBodyTableCell>
                <PaymentBodyTableCell align="right">
                  {" "}
                  {row.status}
                </PaymentBodyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default PaymentSummary;

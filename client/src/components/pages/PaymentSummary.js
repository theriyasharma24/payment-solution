import React, { useContext, useEffect } from "react";
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
import styled from "styled-components";
import AuthContext from "../../context/auth/authContext";
import ClientrdContext from "../../context/clientrd/clientrdContext"
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  padding-left: 2rem;
`;

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
    // background: rgba(149, 213, 84, 0.5);
    font-size: 18px;
  }
`;

const NetIncome = styled(Paper)`
  && {
    border: 4px solid ${colors.purple};
    // background: rgba(182, 88, 255, 0.4);
    color: ${colors.purple};
    border-radius: 10px;
    box-shadow: 4px 5px 5px ${colors.grey};
  }
`;
const AmountPaid = styled(Paper)`
  && {
    border: 4px solid ${colors.primary};
    color: ${colors.primary};
    // background: rgba(0, 128, 0, 0.3);
    border-radius: 10px;
    box-shadow: 4px 5px 5px ${colors.grey};
  }
`;

const AmountPending = styled(Paper)`
  && {
    border: 4px solid ${colors.darkred};
    color: ${colors.darkred};
    border-radius: 10px;
    box-shadow: 4px 5px 5px ${colors.grey};
  }
`;

const PaymentSummary = () => {
  let navigate = useNavigate();
  const client = () => {
    navigate("/clientform")
  }
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const clientrdContext = useContext(ClientrdContext);
  const { clientrds,getClientrds } = clientrdContext;
  function createData(dop, name, amount, status) {
    return { dop, name, amount, status };
  }

  useEffect(() => {
   getClientrds();
  }, []);
  console.log("getClientrds",clientrds);
  const rows = [
    createData("14-01-2022 | 8:00 PM", "Riya Sharma", 1000, "Paid"),
    createData("24-01-2022 | 9:00 PM", "Akshta", 2000, "Paid"),
    createData("03-01-2022 | 8:00 PM", "Devanshi", 1000, "Paid"),
  ];
  
  return (
    <Container>
      <div>
      Welcome <h1>{user && user.name}</h1>
    </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={24} md={0}>
            <Typography variant="h4">Overview</Typography>
          </Grid>
          <Grid item style={{ textAlign: "center" }} xs={12} md={4}>
            <NetIncome elevation={3} style={{ padding: 15 }}>
              <h3>
                <b>Net Income</b>
              </h3>
              <p>
                <b>₹ 10000/-</b>
              </p>
              <p>2 clients</p>
            </NetIncome>
          </Grid>

          <Grid item style={{ textAlign: "center" }} xs={12} md={4}>
            <AmountPaid elevation={3} style={{ padding: 15 }}>
              <h3>
                <b>Amount Paid</b>
              </h3>
              <p>
                <b>₹ 10000/-</b>
              </p>
              <p>2 clients</p>
            </AmountPaid>
          </Grid>
          <Grid item style={{ textAlign: "center" }} xs={12} md={4}>
            <AmountPending elevation={2} style={{ padding: 15 }}>
              <h3>
                <b>Amount Pending</b>
              </h3>
              <p>
                <b>₹ 10000/-</b>
              </p>
              <p>2 clients</p>
            </AmountPending>
          </Grid>
        </Grid>
      </Box>

      <br></br>
      <Typography variant="h4">Earning History</Typography>
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
            {clientrds?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <PaymentBodyTableCell scope="row">
                  {/* {row.dop} */}
                  " "
                </PaymentBodyTableCell>
                <PaymentBodyTableCell align="left">
                  {row.name}
                </PaymentBodyTableCell>
                <PaymentBodyTableCell align="left">
                  ₹{row.amount}/-
                </PaymentBodyTableCell>
                <PaymentBodyTableCell align="right">
                  {" "}
                  {row.paymentstatus}
                </PaymentBodyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{
                                width: '30px',
                                background: 'rgba(149, 213, 84)',
                                color: 'black'
                            }}
                            onClick={client}
                        >
                            Client Form
                        </Button>
    </Container>
  );
};
export default PaymentSummary;

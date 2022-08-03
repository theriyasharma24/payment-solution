import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import colors from '../../essentials/colors';
import styled from 'styled-components';
import AuthContext from '../../context/auth/authContext';
import ClientrdContext from '../../context/clientrd/clientrdContext';
import { useNavigate } from 'react-router-dom';
const TableSummary = styled(TableContainer)`
    background: ${colors.lightblue};
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
        background-color: ${colors.purple};
        color: white;
        border-radius: 10px;
        box-shadow: 4px 5px 5px ${colors.grey};
    }
`;
const AmountPaid = styled(Paper)`
    && {
        border: 4px solid ${colors.primary};
        color: white;
        background-color: ${colors.primary};
        border-radius: 10px;
        box-shadow: 4px 5px 5px ${colors.grey};
    }
`;

const AmountPending = styled(Paper)`
    && {
        border: 4px solid ${colors.orange};
        color: ${colors.orange};
        border-radius: 10px;
        // box-shadow: 4px 5px 5px ${colors.grey};
    }
`;
const TotalClients = styled(Paper)`
    && {
        background: rgba(182, 88, 255, 0.4);
        background-color: ${colors.lightblue};
        // border: 4px solid ${colors.lightblue};
        color: white;
        border-radius: 10px;
        box-shadow: 4px 5px 5px ${colors.grey};
    }
`;

const PaymentSummary = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    const clientrdContext = useContext(ClientrdContext);
    const { clientrds, getClientrds } = clientrdContext;
    const [netincome, setNetincome] = useState();
    let navigate = useNavigate();
    let noc = 0;
    let value = 0;
    noc = clientrds?.length;
    useEffect(() => {
        getClientrds();
        clientrds?.map((amt) => {
            value = value + amt.amount;
            setNetincome(value);
        });
        setNetincome(value);
    }, [netincome]);
    const toClientDetails = () => {
        navigate('/agentdescription');
    };

    return (
        <>
            <div style={{ marginBottom: 2 }}>
                Welcome! <b>{user && user.name}</b>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={0}>
                        <Typography variant="h4">Overview</Typography>
                    </Grid>
                    <Grid item style={{ textAlign: 'center' }} xs={12} md={3}>
                        <NetIncome elevation={3} style={{ padding: 15 }}>
                            <p>
                                <b>Net Income</b>
                            </p>
                            <h3>
                                <b>₹ {netincome}/-</b>
                            </h3>
                            <p>{noc} clients</p>
                        </NetIncome>
                    </Grid>

                    <Grid item style={{ textAlign: 'center' }} xs={12} md={3}>
                        <AmountPaid elevation={3} style={{ padding: 15 }}>
                            <p>
                                <b>Payment Complete</b>
                            </p>
                            <h3>
                                <b>₹ 10000/-</b>
                            </h3>
                            <p>2 clients</p>
                        </AmountPaid>
                    </Grid>
                    <Grid item style={{ textAlign: 'center' }} xs={12} md={3}>
                        <AmountPending elevation={2} style={{ padding: 15 }}>
                            <p>
                                <b>Amount Due</b>
                            </p>
                            <h3>
                                <b>₹ 10000/-</b>
                            </h3>
                            <p>2 clients</p>
                        </AmountPending>
                    </Grid>

                    <Grid item style={{ textAlign: 'center' }} xs={12} md={3}>
                        <TotalClients
                            elevation={2}
                            style={{ padding: 23.5, alignItems: 'center' }}
                        >
                            <p>
                                <b>Total No. of Clients on the Platform</b>
                            </p>
                            <h2>
                                <b>{noc}</b>
                            </h2>
                        </TotalClients>
                    </Grid>
                </Grid>
            </Box>

            <br></br>
            <Typography variant="h4">Earning History</Typography>
            <br></br>
            <TableSummary component={Paper}>
                <Table sx={{ minWidth: 200 }} size="small">
                    <TableHead>
                        <TableRow>
                            <PaymentTableCell>
                                Date of Creation
                            </PaymentTableCell>
                            <PaymentTableCell align="left">
                                Client Name
                            </PaymentTableCell>
                            <PaymentTableCell align="left">
                                Amount
                            </PaymentTableCell>
                            <PaymentTableCell align="right">
                                Payment Status
                            </PaymentTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clientrds?.map((row) => (
                            <TableRow
                                key={row.createdAt}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0
                                    }
                                }}
                                onClick={() => {
                                    navigate('/agentdescription', {
                                        state: row
                                    });
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                <PaymentBodyTableCell scope="row">
                                    <p style={{ color: 'white' }}>
                                        {row.createdAt}
                                    </p>
                                </PaymentBodyTableCell>
                                <PaymentBodyTableCell align="left">
                                    <p style={{ color: 'white' }}>{row.name}</p>
                                </PaymentBodyTableCell>
                                <PaymentBodyTableCell align="left">
                                    <p style={{ color: 'white' }}>
                                        ₹{row.amount}/-
                                    </p>
                                </PaymentBodyTableCell>
                                <PaymentBodyTableCell align="right">
                                    <p style={{ color: 'white' }}>
                                        {row.paymentstatus}
                                    </p>
                                </PaymentBodyTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableSummary>
            {/* <Button
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
            </Button> */}
        </>
    );
};
export default PaymentSummary;

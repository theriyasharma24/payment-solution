import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { ConstructionOutlined } from '@mui/icons-material';
import ClientrdContext from '../../context/clientrd/clientrdContext';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import styled from 'styled-components';
import Message from '../Message';
import Progress from '../Progress';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
const ActionButton = styled(SubmitButton)`
    && {
        background: #0ec0e2;
        color: black;
        margin-top: 2em;
        width: 60%;
    }
`;

const ClientForm = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    const [file, setFile] = useState('');
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [clientrd, setClientrd] = useState({
        name: '',
        aadhaar: '',
        pan: '',
        contact: '',
        email: '',
        address: '',
        amount: '',
        paymentstatus: 'Unpaid',
        signature: '',
        photo: ''
    });

    let navigate = useNavigate();
    const {
        name,
        aadhaar,
        pan,
        contact,
        email,
        address,
        amount,
        paymentstatus,
        signature,
        photo
    } = clientrd;

    const clientrdContext = useContext(ClientrdContext);
    const { addClientrd, getClientrds, clientrds } = clientrdContext;

    const onImgChange = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
        setClientrd({
            ...clientrd,
            signature: file
        });
    };

    const onUploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        // console.log('formData', file);
        let res;
        try {
            {
                file
                    ? (res = await axios.post('/upload', formData, {
                          headers: {
                              'Content-Type': 'multipart/form-data'
                          }
                      }))
                    : alert('No file selected');
            }

            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);
            console.log('data:', res.data);
            const { secure_url } = res.data;
            setClientrd({ ...clientrd, signature: secure_url });
        } catch (err) {
            console.log('Error', err);
        }
    };

    const onChange = (m) => {
        setClientrd({ ...clientrd, [m.target.name]: m.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('inside clientrd on submit');
        addClientrd(clientrd);
        getClientrds();
        console.log('inside clientrd on submit', clientrds);
    };
    return (
        <>
            {message ? <Message msg={message} /> : null}
            <form onSubmit={onSubmit} style={{ textAlign: 'center' }}>
                <div>
                    <div style={{ marginBottom: '2rem' }}>
                        <h1>{user && user.name}</h1> Welcome to
                        <h3> CLIENT FORM</h3>
                    </div>

                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        textalign="center"
                        direction="column"
                    >
                        <Grid
                            container
                            justifyContent="space-between"
                            style={{ marginBottom: '2rem' }}
                        >
                            <Grid item xs={12} md={3}>
                                <TextField
                                    id="name-input"
                                    name="name"
                                    label="Name"
                                    type="text"
                                    value={name}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    id="contact-input"
                                    name="contact"
                                    label="Phone Number"
                                    type="number"
                                    value={contact}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    id="email-input"
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    value={email}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justifyContent="space-between"
                            style={{ marginBottom: '2rem' }}
                        >
                            <Grid item xs={12} md={5}>
                                <TextField
                                    id="pan-input"
                                    name="pan"
                                    label="Pan Number"
                                    type="string"
                                    value={pan}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <TextField
                                    id="adhaar-input"
                                    name="aadhaar"
                                    label="Aadhaar Number"
                                    type="number"
                                    value={aadhaar}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justifyContent="space-between"
                            style={{ marginBottom: '2rem' }}
                        >
                            <Grid item xs={12} md={5}>
                                <TextField
                                    id="address-input"
                                    name="address"
                                    label="Address"
                                    type="text"
                                    value={address}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <TextField
                                    id="amount"
                                    name="amount"
                                    label="Amount"
                                    type="number"
                                    value={amount}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justifyContent="space-between"
                            style={{ marginBottom: '2rem' }}
                        >
                            <Grid item xs={12} md={5}>
                                Photo
                                <ActionButton
                                    style={{
                                        background: 'rgba(149, 213, 84)',
                                        color: 'black',
                                        marginLeft: '1rem'
                                    }}
                                    variant="contained"
                                    component="label"
                                    color="primary"
                                >
                                    Upload
                                </ActionButton>
                            </Grid>
                            <CardMedia
                                component="img"
                                height="180vh"
                                image={signature}
                                alt="Profile Image"
                                style={{ borderRadius: 12 }}
                                // justifyContent="center"
                            />
                            <div className="form-group">
                                <label htmlFor="signature">Signature</label>
                                <input
                                    type="file"
                                    id="customFile"
                                    onChange={onImgChange}
                                    name="signature"
                                />
                                <Progress percentage={uploadPercentage} />
                            </div>
                            <Grid item xs={12} md={5}>
                                <ActionButton
                                    style={{
                                        background: 'rgba(149, 213, 84)',
                                        color: 'black',
                                        marginLeft: '1rem'
                                    }}
                                    variant="contained"
                                    component="label"
                                    color="primary"
                                    onClick={onUploadImage}
                                >
                                    Upload
                                </ActionButton>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <ActionButton
                                type="submit"
                                style={{
                                    background: 'rgba(149, 213, 84)'
                                }}
                            >
                                Submit
                            </ActionButton>
                        </Grid>
                    </Grid>
                    <Grid item>
                        Aadhaar Number
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '100px'
                            }}
                            id="adhaar-input"
                            name="aadhaar"
                            label="Aadhaar Number"
                            type="number"
                            value={aadhaar}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item>
                        PAN Number
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '100px'
                            }}
                            id="pan-input"
                            name="pan"
                            label="Pan Number"
                            type="string"
                            value={pan}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item>
                        Contact
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '100px'
                            }}
                            id="contact-input"
                            name="contact"
                            label="Phone Number"
                            type="number"
                            value={contact}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item>
                        Email Id
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '100px'
                            }}
                            text="hi"
                            id="email-input"
                            name="email"
                            label="Email Address"
                            type="email"
                            value={email}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item>
                        Address
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '100px'
                            }}
                            id="address-input"
                            name="address"
                            label="Address"
                            type="text"
                            value={address}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item style={{ marginLeft: '-8vw' }}>
                        Photo
                        <Button
                            style={{
                                marginLeft: '180px',
                                background: 'rgba(149, 213, 84)',
                                color: 'black'
                            }}
                            variant="contained"
                            component="label"
                            color="primary"
                        >
                            {' '}
                            Upload
                            <input type="file" hidden />
                        </Button>
                    </Grid>
                    <br></br>
                    <Grid item style={{ marginLeft: '-8vw' }}>
                        Signature
                        <Button
                            style={{
                                marginLeft: '150px',
                                background: 'rgba(149, 213, 84)',
                                color: 'black'
                            }}
                            variant="contained"
                            component="label"
                            color="primary"
                        >
                            {' '}
                            Upload
                            <input type="file" hidden />
                        </Button>
                    </Grid>
                    <br></br>
                    <Grid item style={{ marginLeft: '-8vw' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{
                                width: '30px',
                                background: 'rgba(149, 213, 84)',
                                color: 'black'
                            }}
                        >
                            Submit
                        </Button>
                        <div>{clientrds}</div>
                    </Grid>
                </Grid>
            </div>
        </form>
    );
};
export default ClientForm;

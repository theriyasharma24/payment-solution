import { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AuthContext from '../../context/auth/authContext';

import SubmitButton from '../containers/SubmitButton';

import ClientrdContext from '../../context/clientrd/clientrdContext';
import { useNavigate } from 'react-router-dom';

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
    const [filesign, setFileSign] = useState('');
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [uploadPercSign, setUploadPercSign] = useState(0);

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

    const onSigChange = (e) => {
        e.preventDefault();
        setFileSign(e.target.files[0]);
        setClientrd({
            ...clientrd,
            signature: filesign
        });
    };

    const onUploadSignature = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', filesign);
        // console.log('formData', file);
        let res;
        try {
            {
                filesign
                    ? (res = await axios.post('/upload', formData, {
                          headers: {
                              'Content-Type': 'multipart/form-data'
                          },
                          onUploadProgress: (progressEvent) => {
                              setUploadPercSign(
                                  parseInt(
                                      Math.round(
                                          (progressEvent.loaded * 100) /
                                              progressEvent.total
                                      )
                                  )
                              );
                          }
                      }))
                    : alert('No file selected');
            }

            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);
            const { secure_url } = res.data;
            await setClientrd({ ...clientrd, signature: secure_url });
        } catch (err) {
            console.log('Error', err);
        }
    };

    //for photo upload

    const onImgChangePhoto = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
        setClientrd({
            ...clientrd,
            photo: file
        });
    };
    const onUploadPhoto = async (e) => {
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
                          },
                          onUploadProgress: (progressEvent) => {
                              setUploadPercentage(
                                  parseInt(
                                      Math.round(
                                          (progressEvent.loaded * 100) /
                                              progressEvent.total
                                      )
                                  )
                              );
                          }
                      }))
                    : alert('No file selected');
            }

            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);
            const { secure_url } = res.data;
            await setClientrd({ ...clientrd, photo: secure_url });
        } catch (err) {
            console.log('Error', err);
        }
    };

    const onChange = (m) => {
        setClientrd({ ...clientrd, [m.target.name]: m.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await addClientrd(clientrd);
        await navigate('/paymentsummary');
    };
    return (
        <>
            {message ? <Message msg={message} /> : null}
            <form onSubmit={onSubmit} style={{ textAlign: 'center' }}>
                <div>
                    <h3> CLIENT FORM</h3>
                    <div style={{ marginBottom: '2rem' }}>
                        Welcome <h1>{user && user.name}</h1>
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
                            {/* <Grid item xs={12} md={5}>
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
                            </Grid> */}

                            <CardMedia
                                component="img"
                                height="180vh"
                                image={photo}
                                alt="Profile Image"
                                style={{ borderRadius: 12 }}
                                // justifyContent="center"
                            />
                            <div className="form-group">
                                <label htmlFor="photo">Photo</label>
                                <input
                                    type="file"
                                    id="customFile"
                                    onChange={onImgChangePhoto}
                                    name="photo"
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
                                    onClick={onUploadPhoto}
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
                                    onChange={onSigChange}
                                    name="signature"
                                />
                                <Progress percentage={uploadPercSign} />
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
                                    onClick={onUploadSignature}
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
                </div>
            </form>
        </>
    );
};
export default ClientForm;

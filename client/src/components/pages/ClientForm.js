import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClientrdContext from '../../context/clientrd/clientrdContext';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const ClientForm = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    const [clientrd, setClientrd] = useState({
        name: '',
        aadhaar: '',
        pan: '',
        contact: '',
        email: '',
        address: '',
        amount: '',
        paymentstatus: 'Unpaid'
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
        paymentstatus
    } = clientrd;

    const clientrdContext = useContext(ClientrdContext);
    const { addClientrd, getClientrds, clientrds } = clientrdContext;

    const onUploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        let res;
        try {
            {
                file
                    ? (res = await axios.post('/api/artwork/upload', formData, {
                          headers: {
                              'Content-Type': 'multipart/form-data'
                          }
                      }))
                    : console.log('No file selected');
            }

            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);
            const { secure_url } = res.data;
            setArtwork({ art_img: secure_url });
        } catch (err) {
            console.log('There was a problem with the server');
        }
    };

    const onChange = (m) => {
        setClientrd({ ...clientrd, [m.target.name]: m.target.value });
        console.log('clientrd', clientrd);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('before inside clientrd on submit', clientrd);
        addClientrd(clientrd);
        getClientrds();
        console.log('inside clientrd on submit', clientrds);
        navigate('/paymentsummary');
    };
    return (
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
                                type="text"
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
                            <Button
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
                                <input type="file" hidden />
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            Signature
                            <Button
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
                                <input type="file" hidden />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{
                                background: 'rgba(149, 213, 84)',
                                color: 'black',
                                width: '100%'
                            }}
                        >
                            <h3>SUBMIT</h3>
                        </Button>
                        <div>{clientrds}</div>
                    </Grid>
                </Grid>
            </div>
        </form>
    );
};
export default ClientForm;

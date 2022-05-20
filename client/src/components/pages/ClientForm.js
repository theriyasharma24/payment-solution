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
const defaultValues = {
    name: '',
    age: 0,
    gender: '',
    os: '',
    favoriteNumber: 0
};

const ClientForm = () => {
    const [clientrd, setClientrd] = useState({
        name: '',
        aadhaar: '',
        pan: '',
        contact: '',
        email: '',
        address: '',
        paymentstatus: 'unpaid'
    });

    let navigate = useNavigate();
    const payment = () => {
        navigate('/paymentsummary');
    };
    const { name, aadhaar, pan, contact, email, address, paymentstatus } =
        clientrd;

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
        console.log('address', clientrd);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('inside clientrd on submit');
        addClientrd(clientrd);
        getClientrds();
        console.log('inside clientrd on submit', clientrds);
    };
    return (
        <form onSubmit={onSubmit}>
            <div style={{ textAlign: 'center' }}>
                <h3> CLIENT FORM</h3>
                <br></br>
                <Grid
                    container
                    alignItems="left"
                    justify="center"
                    direction="column"
                    style={{ marginLeft: '50px' }}
                >
                    <Grid item>
                        Name
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '180px'
                            }}
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                            value={name}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item>
                        Adhaar Number
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
                                marginLeft: '130px'
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
                                marginLeft: '165px'
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
                                marginLeft: '165px'
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
                                marginLeft: '165px'
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
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{
                                width: '430px',
                                background: 'rgba(149, 213, 84)',
                                color: 'black'
                            }}
                            onClick={payment}
                        >
                            <b>SUBMIT</b>
                        </Button>
                        <div>{clientrds}</div>
                    </Grid>
                </Grid>
            </div>
        </form>
    );
};
export default ClientForm;

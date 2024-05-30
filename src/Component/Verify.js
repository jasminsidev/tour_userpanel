import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import OtpInput from 'react-otp-input';
import '../Style/Verify.css';
import verfliy from '../Image/verfliy.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Verify() {
    const [OTP, setOtp] = useState('');
    console.log(OTP)
    const [ErrorMessage, setErrorMessage] = useState('')
    const email = localStorage.getItem("email")
    const Navigate = useNavigate();
    const data = {
        email: email,
        OTP: OTP
    }
    const handleChange = otp => {
        setOtp(otp)
    }
    const flexotp = () => {
        if (OTP.length !== 6 || !/^\d+$/.test(OTP)) {
            setErrorMessage('Please enter a valid 6-digit OTP.')
            return
        }
        axios.post('http://localhost:2000/api/user/register/verify', {
            email: email,
            OTP: OTP
        }).then((response) => {
            console.log(response, "response");
            Navigate('/Signup')
        }).catch((error) => {
            console.log(error, "error");
        })
    }
    return (
        <>
            <div className="flexfliy" >
                <div className="imgwidth" >
                    <img src={verfliy} />
                </div>
                <div className="maininput" >
                    <Typography textAlign={'center'} variant="h5" >one time password</Typography>
                    <div className="colrowis" >
                        <OtpInput value={OTP} onChange={handleChange} numInputs={6} renderSeparator={<span> </span>} renderInput={(props) => <input {...props} />} />
                    </div>
                    {ErrorMessage && <Typography textAlign={'center'} color={'red'} >{ErrorMessage}</Typography>}
                    <div className="buttontag">
                        <Button sx={{ color: 'warning.main', mt: '10px' }} style={{ backgroundColor: '#3457D5' }} onClick={() => flexotp()}  >login</Button>
                    </div>

                </div>
            </div>
            <Stack spacing={2} direction={"row"} className="nextpagelife" >
                <Typography  >Already have an account</Typography>
                <Link to={'/signup'} className="link" >Sign up</Link>
            </Stack>
        </>
    )
}
export default Verify

import { Box, Button, FormControl, Stack, TextField, Typography } from "@mui/material"
import '../Style/Login.css'
import { useFormik } from "formik"
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import LOGIN from '../Image/LOGIN.jpg'
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {  
    const notify = () => toast("send email enter a otp !");
    const navigate =  useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        },
        onSubmit: value => {
            console.log(value);
            localStorage.setItem("email",value.email)
            localStorage.setItem("password",value.password)
            axios.post('http://localhost:2000/api/user/register',{
                name:value.name ,
                email:value.email,
                password:value.password,
                password_confirmation:value.password_confirmation
            }).then((response)=>{
                console.log(response)
                notify()
                navigate('/verify')
            }).catch((error)=>{
                console.log(error,"give a error")
            })
        },
        validate: error => {
            const values = {}
            if (!error.name) {
                values.name = "required !"
            }
            if (!error.email) {
                values.email = "required !"
            }
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(error.email)) {
                values.email = 'Invalid email address';
            }
            if (!error.password) {
                values.password = "required !"
            }
            if (!error.password_confirmation) {
                values.password_confirmation = "required !"
            }
            else if(error.password_confirmation !== error.password){
                values.password_confirmation="do not match password"
            }
            return values
        }
    })

    return (
        <>
                  <Typography textAlign={'center'} variant="h4" sx={{ m: '10px' }} style={{textShadow:'2px 2px 2px red',color:'#3368FF'}}  >Sign up</Typography>
            <div className="flowgrow" >
                <div className="fleximges" >
                    <img src={LOGIN} />
                </div>
                <div className="formfill" >
              
                    <TextField label="Name" name="name" className="insetitem" onChange={formik.handleChange} error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name} sx={{ mb: '10px' }} />
                    <TextField label="G-mail" name="email" className="insetitem" onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} sx={{ mb: '10px' }} />
                    <TextField label="password" type="password" name="password" className="insetitem" onChange={formik.handleChange} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} sx={{ mb: '10px' }} />
                    <TextField label="Confirm Password" type="password" name="password_confirmation" className="insetitem" onChange={formik.handleChange} error={formik.touched.password_confirmation && Boolean(formik.errors.password_confirmation)} helperText={formik.touched.password_confirmation && formik.errors.password_confirmation} sx={{ mb: '10px' }} />
                    <Button sx={{color: 'warning.main', mb: '10px' }} onClick={formik.handleSubmit} style={{backgroundColor:'#3457D5'}}  >verifly</Button>
            
                    {/* <OtpInput  onChange={formik.handleChange} numInputs={6} renderSeparator={<span> </span>} renderInput={(props) => <input {...props} />}  />
                    <Button sx={{  color: 'warning.main', mt: '10px' }} style={{backgroundColor:'#3457D5'}}  >login</Button> */}
                </div>
            </div>
            <Stack spacing={2} direction={"row"} className="nextpagelife" >
                <Typography  >Already have an account</Typography>
                <Link to={'/signup'} className="link" >Sign up</Link>
                {/* <NavLink to={'/signup'} >
                <Button  >Sign up</Button>
                </NavLink> */}
            </Stack>
        </>
    )
}
export default Login
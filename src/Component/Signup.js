import { Stack, TextField, Button, Typography } from '@mui/material';
import signup from '../Image/signup.png'
import '../Style/Singup.css'
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
function Signup() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            axios.post('http://localhost:2000/api/user/login', {
                email: values.email,
                password: values.password
            }).then((response) => {
                localStorage.setItem("token", response.data.token)
                const item = localStorage.getItem('id')
                if (item) {
                    navigate('/Information')
                } else {
                    navigate('/')
                }
            }).catch(error => {
                console.error('Error:', error);
            });
        },
        validate: value => {
            const error = {}
            if (!value.email) {
                error.email = "required !"
            }
            else if (!/^\S+@\S+\.\S+$/.test(value.email)) {
                error.email = "Invalid email address !"
            }
            if (!value.password) {
                error.password = "required !"
            }
            return error
        }
    })
    return (
        <>
            <Typography textAlign={'center'} variant="h4" sx={{ m: '10px' }} style={{ textShadow: '2px 2px 2px red', color: '#3368FF' }}  >Login Form </Typography>
            <div className="fillcover" >
                <div className='signupwidth' >
                    <img src={signup} />
                </div>
                <div className='signupfilled' >
                    <Stack spacing={2}  >
                        <TextField label="Email" name='email' onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email} />
                        <TextField label="password" name='password' onChange={formik.handleChange} error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password} />
                        <Button onClick={formik.handleSubmit} >login</Button>
                    </Stack>
                </div>

            </div>
            <div className='centertext' >
                <Typography variant='Subtitle' >
                    Don'thave an account? <Link to={'/login'} className='link' >loginup</Link>
                </Typography>
            </div>
        </>
    )
}
export default Signup
import { Alert, Button, Stack, TextField, Typography } from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Information() {
    const navigate = useNavigate()
    const notify = () => toast.success("Successful data add");
    const [key, setKey] = useState();
    const [personListNumber ,setPersonListNumber]=useState(1)
    const [packageData , setPackageData] = useState(null);
    const [amount ,setAmount ] =useState(0)
        
    let location = useLocation();
    const { state } = location;
        
    const formik = useFormik({
        initialValues: {
            fullname: '',
            mobile: '',
            gender: '',
            age: '',
            email: '',
            bordingPoint: '',
            members: [
                {
                    pfullname: '',
                    pmobile: '',
                    pgender: '',
                    page: ''
                }
            ]
        },
        onSubmit: values => {
            axios.post(`http://localhost:2000/api/booking/insertBookDetail/${localStorage.getItem('id')}`, {
                fullname: values.fullname,
                mobile: values.mobile,
                gender: values.gender,
                age: values.age,
                email: values.email,
                bordingPoint: values.bordingPoint,
                members: values.members
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                console.log(res.data);
                notify();
            }).catch(error => console.error('Error:', error));
        },
        validate: values => {
            const error = {}
            if (!values.fullname) {
                error.fullname = "required! "
            }
            if (!values.age) {
                error.age = "required !"
            }
            if (!values.mobile) {
                error.mobile = "required !"
            }
            if (!values.email) {
                error.email = "required !"
            }
            if (!values.bordingPoint) {
                error.bordingPoint = "required !"
            }
            if (!values.gender) {
                error.gender = " required !"
            }
            values.members.forEach((member, index) => {
                const memberErrors = {};
                if (!member.pfullname) {
                    memberErrors.pfullname = "Required!";
                }
                if (!member.pmobile) {
                    memberErrors.pmobile = "Required!";
                }
                if (!member.pgender) {
                    memberErrors.pgender = "Required!";
                }
                if (!member.page) {
                    memberErrors.page = "Required!";
                }
                if (Object.keys(memberErrors).length > 0) {
                    error.members = error.members || [];
                    error.members[index] = memberErrors;
                }
            });
        
            return error
        }
    })

    useEffect(() => {
        setPackageData(state?.item[0]);

        axios.get('http://localhost:2000/api/payment/getKey')
            .then(response => {
                setKey(response.data.key);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        if (packageData) {
            setAmount(10);
            // setAmount(packageData.price * personListNumber);
        }
    }, [personListNumber, packageData]);

    async function checkOutHandler() {
        const { data: { key } } = await axios.get("http://localhost:2000/api/payment/getKey")
        const { data: { order } } = await axios.post("http://localhost:2000/api/payment/createOrder", {
            amount: amount
        })
        const options = {
            key: key,
            amount: order.amount,
            currency: "INR",
            name: "exstory",
            description: "Travelin Payment",
            image: "https://trademaklogos.s3.ap-south-1.amazonaws.com/5409568.jpeg",
            order_id: order.id,
            callback_url: "http://localhost:2000/api/payment/paymentVerification",
            prefill: {
                name: " ",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#029e9d"
            }

        };
        navigate("/Confirmation")
        var razor = new window.Razorpay(options);
        razor.open();
    }

    const addMember = () => {
        setPersonListNumber((prevValue)=>prevValue+ 1)

        formik.setFieldValue("members", [
            ...formik.values.members,
            { pfullname: '', pmobile: '', pgender: '', page: '' }

        ]);
    };   
    return (
        <>
            <Stack  textAlign={'center'}  >
            <Typography variant="h4" color={"#029e9d"} fontWeight={"700"} >Booking</Typography>
            </Stack>
            <Box display="flex" justifyContent="center" flexWrap="wrap" margin="auto" gap={2}>
                <Box flex={1} minWidth={300} maxWidth={600} padding={2}>
                    <form onSubmit={formik.handleSubmit}>
                        <Box display="flex" flexDirection="column" gap={2} paddingY={2}>
                            <TextField id="fullname" name="fullname" label="Fullname" variant="outlined" fullWidth onChange={formik.handleChange} error={formik.touched.fullname && Boolean(formik.errors.fullname)} helperText={formik.touched.fullname && formik.errors.fullname} />
                            <TextField id="mobile" name="mobile" label="Mobile" variant="outlined" fullWidth onChange={formik.handleChange} error={formik.touched.mobile && Boolean(formik.errors.mobile)} helperText={formik.touched.mobile && formik.errors.mobile} />
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="gender-label">Gender</InputLabel>
                                <Select labelId="gender-label" id="gender" name="gender" label="Gender" onChange={formik.handleChange} error={formik.touched.gender && Boolean(formik.errors.gender)}>
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField id="age" name="age" label="Age" variant="outlined" fullWidth onChange={formik.handleChange} error={formik.touched.age && Boolean(formik.errors.age)} helperText={formik.touched.age && formik.errors.age} />
                            <TextField id="email" name="email" label="Email" variant="outlined" fullWidth onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} />
                            <TextField id="bordingPoint" name="bordingPoint" label="Select City" variant="outlined" fullWidth onChange={formik.handleChange} error={formik.touched.bordingPoint && Boolean(formik.errors.bordingPoint)} helperText={formik.touched.bordingPoint && formik.errors.bordingPoint} />
                        </Box>
                        {formik.values.members.map((member, index) => (
                            <Box key={index} display="flex" flexDirection="column" gap={2} paddingY={2}>
                                <TextField id={`members[${index}].pfullname`} name={`members[${index}].pfullname`} label="Member Fullname" variant="outlined" fullWidth onChange={formik.handleChange} error={formik.touched.members?.[index]?.pfullname && Boolean(formik.errors.members?.[index]?.pfullname)} helperText={formik.touched.members?.[index]?.pfullname && formik.errors.members?.[index]?.pfullname} />
                                <TextField id={`members[${index}].pmobile`} name={`members[${index}].pmobile`} label="Member Mobile" variant="outlined" fullWidth onChange={formik.handleChange} error={formik.touched.members?.[index]?.pmobile && Boolean(formik.errors.members?.[index]?.pmobile)} helperText={formik.touched.members?.[index]?.pmobile && formik.errors.members?.[index]?.pmobile} />
                                <TextField id={`members[${index}].pgender`} name={`members[${index}].pgender`} label="Member Gender" variant="outlined" fullWidth onChange={formik.handleChange} error={formik.touched.members?.[index]?.pgender && Boolean(formik.errors.members?.[index]?.pgender)} helperText={formik.touched.members?.[index]?.pgender && formik.errors.members?.[index]?.pgender} />
                                <TextField id={`members[${index}].page`} name={`members[${index}].page`} label="Member Age" variant="outlined" fullWidth onChange={formik.handleChange} error={formik.touched.members?.[index]?.page && Boolean(formik.errors.members?.[index]?.page)} helperText={formik.touched.members?.[index]?.page && formik.errors.members?.[index]?.page} />
                            </Box>
                        ))}
                        <Box display="flex" justifyContent="space-between" paddingY={2}>
                            <Button variant="outlined" onClick={addMember}>Add Member</Button>
                            <Button variant="contained" type="submit">Save Details</Button>
                        </Box>
                    </form>
                </Box>
                <Box flex={1} minWidth={300} maxWidth={600} padding={2}>
                    <Box textAlign="center" padding={2} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                        <Typography variant="body1" textTransform="capitalize" fontWeight={700}>Your Booking Details</Typography>
                    </Box>
                    <Box padding={2} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                        <Typography variant="body1" textTransform="capitalize" fontWeight={700} textAlign="center" padding={1}>Your Price Summary</Typography>
                        <Box border="1px solid gray" padding={2}>
                            <Box display="flex" justifyContent="space-between" paddingY={1}>
                                <Typography>Superior town</Typography>
                                <Typography><del>500</del></Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" paddingY={1}>
                                <Typography>Per person</Typography>
                                <Typography>{packageData?.price}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" paddingY={1}>
                                <Typography>Number of Travellers</Typography>
                                <Typography>{personListNumber}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" paddingY={1}>
                                <Typography>Tax & Fee</Typography>
                                <Typography>No Tax</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" paddingY={1}>
                                <Typography>Booking Fee</Typography>
                                <Typography>Free</Typography>
                            </Box>
                            <hr />
                            <Box display="flex" justifyContent="space-between" paddingY={1}>
                                <Typography color='text.disabled'>Amount</Typography>
                                <Typography>${amount}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box padding={2} marginY={2} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                        <Typography variant="h6">Your journey :)</Typography>
                        <Typography variant="subtitle1">A little step may be the beginning of a great journey</Typography>
                    </Box>
                    <Box textAlign="center">
                        <Button variant="contained" onClick={checkOutHandler}>Pay Now</Button>
                    </Box>
                </Box>
            </Box>
            <Box textAlign="center" marginTop={4}>
                <Typography variant="h5">Love where you're going</Typography>
                <Typography  >explore Your Life <span> ,Travel Where You Want  </span></Typography>
                <Typography>lorem ipsum dolor sit amet,consectetur adipicing elit,sed do eriusmod tempor incididunt utlabore et dolore magna aliqua.</Typography>
            </Box>
            <ToastContainer />
        </>
    )
}

export default Information

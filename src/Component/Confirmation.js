import { Table, Typography, TableRow, TableCell, Button, Stack } from "@mui/material";
import '../Style/Confirmation.css';
import { VscWorkspaceTrusted } from "react-icons/vsc";
function Confirmation(prosp) {
    return (
        <>
            <Stack textAlign={"center"} >
                <Typography fontSize={"50px"} color={"#029e9d"} fontWeight={"700"} style={{textShadow:''}} >Confirmation</Typography>
  
            </Stack >
            <div className="Confirmationmain" >
                <div className="" >
                    <div className="iconmaintext" >
                        <div className="iconsettion" >
                            <VscWorkspaceTrusted className="icons" />
                        </div>
                        <div>
                            <Typography variant="h4" >Thank you. your booking order Confirmed  Now</Typography>
                            <Typography variant="subtitle1" >A confirmation email has been sent t6o your peovided email adddress</Typography>
                        </div>

                    </div>
                    <div>
                        <Table className="createtable" >
                            <TableRow>
                                <TableCell>order number</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>Payment method</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>20120</TableCell>
                                <TableCell>10-05-2024</TableCell>
                                <TableCell>7024</TableCell>
                                <TableCell>gpay</TableCell>
                            </TableRow>
                        </Table>
                    </div>
                    <div>
                        <Typography variant="h3" textTransform={'capitalize'} >traveler information</Typography>
                        <Table className="createtable" >
                            <TableRow>
                                <TableCell>Booking number</TableCell>
                                <TableCell>5784-kD245</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>first name</TableCell>
                                <TableCell>jasmin</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>lastname</TableCell>
                                <TableCell>katrodiya</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Email adddress</TableCell>
                                <TableCell>jasminkatrodiya@gmail.com</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>street adddress and number</TableCell>
                                <TableCell>353 Third floor avenue</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Town/city</TableCell>
                                <TableCell>surat</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>zip code </TableCell>
                                <TableCell>75800-875</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Country</TableCell>
                                <TableCell>india</TableCell>
                            </TableRow>
                        </Table>
                    </div>
                    <div>
                        <Button variant="contained" sx={{ marginRight: '10px', bgcolor: 'success.main' }} >print </Button>
                        <Button variant="contained" sx={{ bgcolor: 'success.main' }} >send to</Button>
                    </div>
                </div>
                <div  >
                    <div className="contextfive" >
                        <Typography variant="h4" sx={{ fontWeight: '500' }} >Need Booking Help ?</Typography>
                        <Typography>paid was hill sir high 24/7. for him preecutuion any advantages dissimilar</Typography>
                        <div className="textmian" >
                            <Typography>hotline :-475 15 123 21</Typography>
                            <Typography>Email :-support@Yatriiworld.com</Typography>
                            <Typography>Livechat:-yatrilleorld (Skype)</Typography>
                        </div>
                    </div>
                    <div className="contextfive" >
                        <Typography variant="h4" >Why Booking With us ?</Typography>
                        <div className="textmian">
                            <Typography>No booking Charges</Typography>
                            <Typography>we don"t charge you an extra fee for booking a hotel room with us</Typography>
                        </div>
                        <div className="textmian">
                            <Typography>No Cancellation Sees</Typography>
                            <Typography>we don't charge you a cancellation or modification fee in case plans change</Typography>
                        </div>
                        <div className="textmian">
                            <Typography>Instant confirmation</Typography>
                            <Typography>instant booking confirmation whether booking online or via the telephone</Typography>
                        </div>
                        <div className="textmian">
                            <Typography>Flexible Booking </Typography>
                            <Typography >you can book up to a cwhole year in advance or right up until moment of your stay</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Confirmation
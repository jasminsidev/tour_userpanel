import { Container, Stack, Typography ,Grid} from "@mui/material";
import { green } from '@mui/material/colors';
import "../Style/About.css";
import travel from '../Image/Gudies/travel.png'
import ScrollToTop from "react-scroll-to-top";
import destination6 from '../Image/Gudies/destination6.jpg'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
function About() {
    const color = green[500];
    return (
        <>
            <Stack textAlign={"center"} >
                <Typography className="bount"  color={"#029e9d"} fontWeight={"700"}  fontSize={"50px"} >ABOUT US</Typography>
            </Stack>
            < Container style={{display:'flex',flexWrap:'wrap'}} > 
                <div style={{minWidth:'100px',maxWidth:'550px',margin:'auto'}} >
                    <Typography color={'#029e9d'} fontWeight={"600"} variant="h6" >Get To Know us</Typography>
                    <Typography  fontWeight={"600"} sx={{fontSize:'25px'}} > Explore  All Tours of the World with Us</Typography>

                    <Typography  >Lorem ipsum door sit amet,consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mqagna aliqua.ut enim ad minuim veniam,quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.</Typography>
                    <Typography>Duis aute irure dolor in reprehederit in voluptate in volupatate velit esse cillum dolore eu fugiat nulla paritur.excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit id est laborum.</Typography>
                </div>
                <div style={{minWidth:'100px',maxWidth:'580px'}} className="issone" >
                    <img src={travel} width={"100%"} />
                </div>
            </Container>           
            < Container style={{display:'flex',flexWrap:'wrap'}} > 
            <div style={{minWidth:'100px',maxWidth:'580px'}} className="issones" >
                    <img src={destination6} width={"100%"} />
                </div>
           
                <div style={{minWidth:'100px',maxWidth:'550px',margin:'auto'}} >
                    <Typography color={'#029e9d'} fontWeight={"600"} variant="h6" >pefect Team</Typography>
                    <Typography  fontWeight={"600"} sx={{fontSize:'25px'}} > Our Experirence Guides</Typography>
                    <Typography  >lorem ipsum dolor sit amet,conserctetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magana aliqua.ut enim ad minim veniam quis nostrud exercitation ullamco</Typography>
                    <Stack direction={"row"} >
                        <LocationOnOutlinedIcon sx={{color:'#029e9d'}} />
                        <Typography>Expert team Guide </Typography>
                    </Stack>
                    <Typography>Enim ad minim veniam,quio nostrud exercition ullamco laboris nisi ut aliquip ex excommodo consequat</Typography>
                    <Stack direction={"row"} >
                        <WorkOutlineOutlinedIcon sx={{color:'#029e9d'}} />
                        <Typography>correct Direclions  </Typography>
                    </Stack>
                    <Typography>Enim ad minim veniam,quio nostrud exercition ullamco laboris nisi ut aliquip ex excommodo consequat</Typography>
                    <Stack direction={"row"} >
                        <FolderOutlinedIcon sx={{color:'#029e9d'}} />
                        <Typography>save Money & time </Typography>
                    </Stack>
                    <Typography>Enim ad minim veniam,quio nostrud exercition ullamco laboris nisi ut aliquip ex excommodo consequat</Typography>
                </div> 
            </Container>
            <ScrollToTop top={20} style={{ borderRadius: '50%' }} color="red" />
        </>
    )
}
export default About
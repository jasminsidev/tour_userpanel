import { Grid, Card, Typography, CardContent, CardMedia, CircularProgress, CardActions, Button, CardActionArea, Stack } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import '../Style/Direction.css';

function Destitution() {
    const [data, setData] = useState([]);
    console.log(data)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:2000/api/destination/getDesti');
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }
    if (error) {
        return <Typography>Error: {error.message}</Typography>;
    }
    return (
        <>
            <Stack textAlign={'center'} >
                <Typography  fontSize={'50px'} fontWeight={'700'} color={'#029e9d'}>Destination List</Typography>
            </Stack>

            
            <div className="flexmain"  >
                {
                    data.map((item) =>
                        <Card className="cardmain" >
                            <div className="imgagewidth" >
                                <CardMedia component="img" image={`http://localhost:2000/${item.imageUrl}`} width={'100%'} height={'100%'} />
                            </div>
                            <CardContent className="textstate" >{item.state}</CardContent>
                            <CardContent>{item.place}</CardContent>
                        </Card>
                    )
                }
            </div>
            <Stack textAlign={"center"} paddingY={"20px"} >
                <Typography color={'green'} fontWeight={'800'}>Love where You're Going</Typography>
         

                <Typography fontWeight={'700'}>Explore your life, <span color={""} fontWeight={"800"} style={{color:'#ffee58',fontWeight:'800'}} >travel where you want!</span></Typography>
              
                <Typography color={'gray'}>"Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</Typography>
            </Stack>
        </>
    );
}

export default Destitution;

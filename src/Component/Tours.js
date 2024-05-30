import { Stack, Typography } from "@mui/material";
import '../Style/Tours.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function Tours() {
    const navigate = useNavigate();
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:2000/api/package/getPackage')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    function payment(_id) {
        fetch(`http://localhost:2000/api/package/getPackageById/${_id}`)
            .then(response => response.json())
            .then(data => console.log(data));
        navigate(`/Booking/${_id}`);
    }
    const [state, setState] = React.useState({
        HistoricalTours: true,
        BeachHolidays: false,
        HoneymoonTours: false,
        RoadTrips: false,
        TrekkingTours: false
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { HistoricalTours, BeachHolidays, HoneymoonTours, RoadTrips, TrekkingTours } = state;
    const error = [HistoricalTours, BeachHolidays, HoneymoonTours, RoadTrips, TrekkingTours].filter((v) => v).length !== 2;
    return (
        <>
            <Stack textAlign={'center'}>
                <Typography color={'#009688'} fontSize={'50px'} fontWeight={"700"} style={{ textShadow: "3px 1px 2px rgba(0, 0, 0, 0.6)" }}>
                    Tours List
                </Typography>
            </Stack>
            <div className="packagefilter">
                <div>
                    {data.map((item) => (
                        <div className="tourslists" key={item._id}>
                            <div className="toursitem">
                                <img src={`http://localhost:2000/${item.imageUrl}`} alt={item.name} style={{ width: '100%', marginLeft: '6px' }} />
                            </div>
                            <Stack className="folxclass" marginY={"30px"} >
                                <Typography variant="h6" paddingX={"20px"} >{item.name}</Typography>
                                <Stack direction={"row"} spacing={"30px"} >
                                <Typography color={"grey"} >{item.destination}</Typography>
                                <Typography variant="body1">Rs: {item.price} <span style={{fontWeight:'700',color:"#009688"}} >per Aduit</span></Typography>
                                
                                </Stack>
                                <Typography variant="body2" sx={{ fontWeight: '700' }} paddingY={"20px"} >{item.description}</Typography>
                            
                                <div className="discenter">
                                    <Button variant="contained" onClick={() => payment(item._id)}>View Details</Button>
                                </div>
                            </Stack>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollToTop top={20} style={{ borderRadius: '50%' }} color="red" />
        </>
    );
}

export default Tours;

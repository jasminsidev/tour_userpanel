import { Box, Button, Stack, Typography } from "@mui/material";
import "../Style/Booking.css";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaClock } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoPeopleCircle } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import map from "../Image/Gudies/map.jpg";
function Booking() {
  const Params = useParams();
  const { id } = Params;
  const [age, setAge] = useState("");
  const [item, setitem] = useState([]);
  console.log(item);
  useEffect(() => {
    getData();
  }, [id]);
  const getData = async () => {
    const response = await axios.get(
      `http://localhost:2000/api/package/getPackageById/${id}`
    );
    
     await setitem([response.data]);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const navigate = useNavigate();
  function nqaviagate() {
    const token = localStorage.getItem('token');
    if(!token){
      navigate('/login')
    }
    navigate("/Information", { state: { item:item } });
  }
  return (
    <>
      <Stack textAlign={"center"} paddingX={"10px"}>
        <Typography
          textTransform={"uppercase"}
          color={"#029e9d"}
          fontSize={"50px"}
          fontWeight={"700"}
          style={{ textShadow: "3px 1px 2px rgba(0, 0, 0, 0.6)"}}
        >
          Tour Schedule
        </Typography>
      </Stack>
      <div className="mainis">
        <>
          {item.map((data) => (
            <div>
              <Typography textAlign={"center"} fontWeight={800}>
                {data.name}
              </Typography>
              <div className="imgstag">
                <img
                  src={`http://localhost:2000/${data.imageUrl}`}
                  alt="jasmin katrodiya"
                />
              </div>
              <div className="imgstag">
                <Typography variant="h5" fontWeight={800}>
                  Descripation:-
                </Typography>
                <Typography>{data.longDescription}</Typography>
              </div>
              <div className="flox">
                <div>
                  <FaClock className="icons" />
                  days:{data.duration}
                </div>
                <div>
                  <IoPeople />
                  Max people:- {data.maxPeople}
                </div>
                <div>
                  <IoPeopleCircle />
                  Min age:-{data.minAge}
                </div>
              </div>
            </div>
          ))}
        </>
        {item.map((issuccess) => (
          <div>
            <div className="bookingmain">
              <Typography className="tagis" borderBottom={"1px dotted white"}>
                Make A Booking
              </Typography>
              <Typography color={"white"} sx={{ padding: "10px 10px" }}>
                Trip start date
              </Typography>
              <div className="tripstartday" style={{ padding: "10px 10px" }}>
                <FaCalendar color={"white"} />
                <Typography color={"white"}>{issuccess.date}</Typography>
              </div>
              <Typography color={"white"} sx={{ padding: "10px 10px" }}>
                No Of People
              </Typography>
              <FormControl
                sx={{ m: 1, minWidth: 120, margin: "0" }}
                size="small"
              >
                <InputLabel id="demo-select-small-label"></InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  style={{ backgroundColor: "white", margin: "0px 10px" }}
                >
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>4</MenuItem>
                  <MenuItem value={50}>5</MenuItem>
                </Select>
              </FormControl>
              <div className="peicestyle">
                <Stack direction={"row"} justifyContent={"space-around"}>
                  <Typography color={"#A9A9A9"}>Per person</Typography>
                  <Typography style={{ color: "#A9A9A9", fontWeight: "500" }}>
                    1
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"space-around"}
                  borderBottom={"1px solid gray"}
                >
                  <Typography color={"#A9A9A9"}>Other Fess</Typography>
                  <Typography style={{ color: "#A9A9A9", fontWeight: "500" }}>
                    Free
                  </Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-around"}>
                  <Typography>total</Typography>
                  <Typography>{issuccess.price}</Typography>
                </Stack>
                <Typography style={{ padding: "10px" }} fontWeight={"700"}>
                  note:-Click instant book and add passanger detail
                </Typography>
              </div>
              <Button
                sx={{ margin: "0px 10px", color: "white" }}
                variant="outlined"
                onClick={() => nqaviagate()}
                bgcolor="rgb(2, 158, 157)"
              >
                instant book
              </Button>
            </div>
            <Stack>
              <img src={map} alt="logo" />
              <Stack direction={"row"} spacing={"10px"}>
                <Stack
                  padding={"10px"}
                  bgcolor={"#fb8c00"}
                  width={"25px"}
                  borderRadius={"12px"}
                >
                  <Typography>4.5</Typography>
                </Stack>
                <Stack>
                  <Typography> Exceptional</Typography>
                  <Typography>Location rating score</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={"row"} paddingY={"10px"}>
              <FaLocationDot color="green" />
              <Typography> better than 99 % properties in location</Typography>
            </Stack>
            <Stack direction={"row"} paddingY={"10px"}>
              <FaLocationDot color="green" />
              <Typography>
                {" "}
                exceptional location - inside city center{" "}
              </Typography>
            </Stack>
            <Stack direction={"row"} paddingY={"10px"}>
              <FaLocationDot color="green" />
              <Typography>popular neighbourhood </Typography>
            </Stack>
          </div>
        ))}
      </div>
      <Stack textAlign={"center"} paddingY={"20px"}>
        <Typography
          textTransform={"capitalize"}
          color={"green"}
          fontWeight={"700"}
        >
          love where your's going
        </Typography>
        <Typography textTransform={"capitalize"} fontWeight={"700"}>
          Explore Your life,{" "}
          <span className="istextbutton">Travel where you want </span>
        </Typography>
        <Typography variant="subtitle2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </Typography>
      </Stack>
    </>
  );
}
export default Booking;

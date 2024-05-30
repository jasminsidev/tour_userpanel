import {
  Button,
  Stack,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import "react-alice-carousel/lib/alice-carousel.css";
import { NavLink } from "react-router-dom";
import Slider from "./Slider";
import "../Style/Main.css";
import ScrollToTop from "react-scroll-to-top";
import React, { useEffect } from "react";
import img1 from "../Image/Gudies/img1.jpg";
import img2 from "../Image/Gudies/img2.jpg";
import img3 from "../Image/Gudies/img3.jpg";
import img4 from "../Image/Gudies/img4.jpg";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import axios from "axios";
function Main() {
  const [data, setdata] = React.useState([]);
  console.log(data, "jasmin");
  const [item, setitem] = React.useState(false);
  console.log(item);
  const [isset, setisset] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:2000/api/destination/getDesti").then((is) =>
      is.json().then((itemis) => setdata(itemis))
    );
    setitem(true);
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:2000/api/package/getPackage")
      .then((response) => {
        setisset(response.data);
      })
      .catch((error) => {
        console.log();
      });
  }, []);
  return (
    <>
      <Slider />
      <ScrollToTop top={50} style={{ borderRadius: "50%" }} color="red" />
      <div className="flexmains">
        <Typography variant={"h6"} color={"green"} className="logotext">
          Tours and Travels
        </Typography>
        <Typography variant={"h5"} fontSize={"medium"} sx={{ mb: "6px" }}>
          Best location for website in visited
        </Typography>
        <NavLink to={"Tours"}>
          <Button
            variant={"outlined"}
            color="success"
            style={{ marginBottom: "20px" }}
          >
            visted location
          </Button>
        </NavLink>
      </div>
      <Stack textAlign={"center"} padding={"15px 0px"}>
        <Typography fontWeight={"900"} color={"#ffab00"}>
          Core Features
        </Typography>
        <Typography fontWeight={"800"}>
          Find <span style={{ color: "#029e9d" }}> Travel Prefeclion</span>
        </Typography>
        <Typography variant="subtitle2">
          "Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
        </Typography>
      </Stack>
      <div className="Features">
        <div className="Featuresi">
          <div className="icons">
            <FlagOutlinedIcon sx={{ color: "#029e9d" }} />
          </div>
          <Typography className="iconshading">
            Tell Us what You Want To do
          </Typography>
          <Typography className="iconstext">
            Excepteur sint occaeat cupidatat non proident sunt in culpa qui
            officia
          </Typography>
          <Typography sx={{ color: "#029e9d", paddingLeft: "30px" }}>
            100+ Reviews
          </Typography>
        </div>
        <div className="Featuresi">
          <div className="icons">
            <PlaceOutlinedIcon sx={{ color: "#029e9d" }} />
          </div>
          <Typography className="iconshading">
            Share Your Travel Locations{" "}
          </Typography>
          <Typography className="iconstext">
            Excepteur sint occaeat cupidatat non proident sunt in culpa qui
            officia
          </Typography>
          <Typography sx={{ color: "#029e9d", paddingLeft: "30px" }}>
            100+ Reviews
          </Typography>
        </div>
        <div className="Featuresi">
          <div className="icons">
            <LocalPoliceOutlinedIcon sx={{ color: "#029e9d" }} />
          </div>
          <Typography className="iconshading">
            Share Your Travel Preference{" "}
          </Typography>
          <Typography className="iconstext">
            excepteur sint occaeat cupidatat non proident sunt in culpa qui
            officia
          </Typography>
          <Typography sx={{ color: "#029e9d", paddingLeft: "30px" }}>
            100+ Reviews
          </Typography>
        </div>
        <div className="Featuresi">
          <div className="icons">
            <ExploreOutlinedIcon sx={{ color: "#029e9d" }} />
          </div>
          <Typography className="iconshading">
            100% Trusted Tour Agency
          </Typography>
          <Typography className="iconstext">
            excepteur sint occaeat cupidatat non proident sunt in culpa qui
            officia
          </Typography>
          <Typography sx={{ color: "#029e9d", paddingLeft: "30px" }}>
            100+ Reviews
          </Typography>
        </div>
      </div>
      <Stack textAlign={"center"} padding={"15px 0px"}>
        <Typography color={"#fdd835"} variant="subtitle1" fontWeight={600}>
          Top Destinations{" "}
        </Typography>
        <Typography fontWeight={600} variant="subtitle1">
          Explore <span style={{ color: "#029e9d" }}>Top Destinations</span>
        </Typography>
        <Typography variant="subtitle2">
          "Discoveer the extrooradinary.Explare top destinations with us."
        </Typography>
      </Stack>
      <div className="flexcol">
        <div>
          <div className="mainimage">
            {data[0] && (
              <>
                <img
                  src={`http://localhost:2000/${data[0].imageUrl}`}
                  alt={data[0].place}
                  className="imgbar"
                />
                <Stack>
                  <Typography>{data[0].place}</Typography>
                  <Typography>{data[0].state}</Typography>
                </Stack>
              </>
            )}
          </div>
          <div className="flexcolles">
            {data.slice(2, 4).map((dest, index) => (
              <div className="floxmainis" key={index}>
                <img
                  src={`http://localhost:2000/${dest.imageUrl}`}
                  alt={dest.place}
                  className="imgbar"
                />
                <Stack>
                  <Typography>{dest.place}</Typography>
                  <Typography>{dest.state}</Typography>
                </Stack>
              </div>
            ))}
          </div>
        </div>
        <div className="mainimage">
          {data[1] && (
            <>
              <img
                src={`http://localhost:2000/${data[1].imageUrl}`}
                alt={data[1].place}
                className="imgbar"
                style={{ height: "590px" }}
              />
              <Stack>
                <Typography>{data[1].place}</Typography>
                <Typography>{data[1].state}</Typography>
              </Stack>
            </>
          )}
        </div>
      </div>
      <Stack textAlign={"center"}>
        <Typography sx={{ color: "#8B8000" }}>Top Pick</Typography>
        <Typography>
          Best <span sx={{ color: "green" }}>Your Packages</span>{" "}
        </Typography>
        <Typography sx={{ color: "gray" }} variant="subtitle2">
          "Visit iconic landmarks and historical sites with out export
          guides.books your expedition Today."
        </Typography>
      </Stack>
      <div className="packagemain">
        {isset.map((data) => (
          <Card className="withset">
            <div className="imgwithset">
              <CardMedia
                component="img"
                alt="green iguana"
                image={`http://localhost:2000/${data.imageUrl}`}
              />
            </div>
            <CardActions className="rightsidemove">
              <Button variant="outlined">{data.day} days Tours</Button>
            </CardActions>
            <CardContent>
              <Typography variant="body1" textTransform={"capitalize"}>
                {data.name}
              </Typography>
              <Typography variant="body1" padding={"15px 0px"}>
                {data.destination}
              </Typography>
              <Typography
                variant="body2"
                borderBottom={"1px solid gray"}
                padding={"15px 0px"}
              >
                {data.description}
              </Typography>
              <Typography
                padding={"15px 0px"}
                fontWeight={600}
                color={"#029e9d"}
              >
                ₹ {data.price}{" "}
                <span style={{ color: "#bdbdbd" }}> | pre preson</span>{" "}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Stack textAlign={"center"} padding={"10px 0px"}>
        <Typography variant="subtitle1" color={"#fdd835"} fontWeight={600}>
          {" "}
          Tour Guides
        </Typography>
        <Typography variant="subtitle1" fontWeight={600}>
          Meet Our{" "}
          <span style={{ color: "green", fontWeight: "600" }}>
            {" "}
            Excellent Guides
          </span>
        </Typography>
        <Typography color={"#616161"} variant="subtitle2">
          "Exceptional Guides for unforgettable jourjneys"
        </Typography>
      </Stack>

      <div className="gaidusmain">
        <div>
          <div style={{ width: "250px" }}>
            <img
              src={img1}
              alt="img is a not show"
              width={"100%"}  
            />
          </div>
          <Stack textAlign={"center"} sx={{ bgcolor: "#26a69a"}}>
            <Typography style={{ color: "white" }}>Salmon Thuir</Typography>
            <Typography
              variant="subtitle2"
              fontSize={"8px"}
              paddingBottom={"12px"}
              color={"white"}
            >
              senior Agent(SA)
            </Typography>
          </Stack>
        </div>
        <div>
          <div style={{ width: "250px" }}>
            <img
              src={img2}
              alt="img is a not show"
              width={"100%"}
       
            />
          </div>
          <Stack textAlign={"center"} sx={{ bgcolor: "#26a69a" }}>
            <Typography style={{ color: "white" }}>Horke Pels</Typography>
            <Typography
              variant="subtitle2"
              fontSize={"8px"}
              paddingBottom={"12px"}
              color={"white"}
            >
              Head Officer (HO)
            </Typography>
          </Stack>
        </div>
        <div>
          <div style={{ width: "250px" }}>
            <img
              src={img3}
              alt="img is a not show"
              width={"100%"}
             
            />
          </div>
          <Stack textAlign={"center"} sx={{ bgcolor: "#26a69a" }}>
            <Typography style={{ color: "white" }}>Solden Kalos</Typography>
            <Typography
              variant="subtitle2"
              fontSize={"8px"}
              paddingBottom={"12px"}
              color={"white"}
            >
              Supervisor(SO)
            </Typography>
          </Stack>
        </div>
        <div>
          <div style={{ width: "250px" }}>
            <img
              src={img4}
              alt="img is a not show"
              width={"100%"}
            
            />
          </div>
          <Stack textAlign={"center"} sx={{ bgcolor: "#26a69a" }}>
            <Typography style={{ color: "white" }}>Nelson Bam </Typography>
            <Typography
              variant="subtitle2"
              fontSize={"10px"}
              paddingBottom={"12px"}
              color={"white"}
            >
              Quality Assurance(QA)
            </Typography>
          </Stack>
        </div>
      </div>
    </>
  );
}
export default Main;

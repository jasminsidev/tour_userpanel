import React from "react";
import "../Style/Footer.css";
import logowhite from "../Image/Gudies/logowhite.png";
import { List, Stack, Typography, ListItem, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
function Footer() {
  return (
    <>
      <div className="main">
        <Container>
          <div className="mainfooter">
            <Stack>
              <Typography width={"100px"}>
                <img src={logowhite} width={"100%"} />
              </Typography>
              <Typography minWidth={"200px"} maxWidth={"400px"} color={"white"}>
                lorem ipsum dolor sit amet,consrectetur adipiscing elit.odio
                suspedise ieo neque molestie safittis maecenas aemena eget
                molestie safitis.
              </Typography>
              <List>
                <ListItem sx={{ color: "#f5f5f5" }}>
                  po box :-47-252-254-2542
                </ListItem>
                <ListItem sx={{ color: "#f5f5f5" }}>
                  location:-collins stree,sydney,australia
                </ListItem>
                <ListItem sx={{ color: "#f5f5f5" }}>
                  email:-infor@travelin.com
                </ListItem>
                <ListItem sx={{ color: "#f5f5f5" }}>
                  websitre:-www.travelin.com
                </ListItem>
              </List>
            </Stack>
            <Stack>
              <Typography sx={{ color: "white",fontSize:'h6.fontSize' }}>Quick Link</Typography>
              <List>
                <ListItem sx={{ color: "white" }}>
                  <NavLink
                    to={"/"}
                    style={{ color: "white", textDecoration: "none" }}  
                    className="isnavbar"
                  >
                    Home
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink
                    to={"/Destination"}
                    style={{ color: "white", textDecoration: "none" }}
                    className="isnavbar"
                  >
                    Destination
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink
                    to={"/Tours"}
                    style={{ color: "white", textDecoration: "none" }}
                    className="isnavbar"
                  >
                    Tours
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink
                    to={"/About"}
                    style={{ color: "white", textDecoration: "none" }}
                    className="isnavbar"
                  >
                    About Us
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink
                    to={"/Contact"}
                    style={{ color: "white", textDecoration: "none" }}
                    className="isnavbar"
                  >
                    Contact Us{" "}
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink
                    to={"/login"}
                    style={{ color: "white", textDecoration: "none" }}
                    className="isnavbar"
                  >
                    register{" "}
                  </NavLink>
                </ListItem>
              </List>
            </Stack>
            <Stack>
              <Typography sx={{ color: "white",fontSize:'h6.fontSize' }}  >Newsletter</Typography>
              <Typography
                maxWidth={"400px"}
                minWidth={"200px"}
                sx={{ color: "white" }}
              >
                jin our community of over 200,000 global reders who recives
                emails filed with news,promotions and other good stuff.
              </Typography>
            </Stack>
          </div>
          <Stack direction={"row"}>
            <Typography variant="body1 " color={"#eeeeee"}> 
              We Support
            </Typography>
            <Typography maxWidth={"200px"}  ></Typography>
          </Stack>
          <Stack
            direction={"row"}
            border={"1px solid gray"}
            margin={"6px"}
            display={"flex"}
            justifyContent={"space-between"}
            padding={"12px"}
            bgcolor={"rgba(0,0,0,.87)"}
          >
            <Typography variant="subtitle1" color={"#eeeeee"}>
              2022 travelin.All rights reserved
            </Typography>
            <Stack direction={"row"} spacing={"10px"}>
              <Typography color={"#eeeeee"}>
                <FacebookOutlinedIcon />
              </Typography>
              <Typography color={"#eeeeee"}>
                <FaInstagram />
              </Typography>
              <Typography color={"#eeeeee"}>
                <CiTwitter />
              </Typography>
              <Typography color={"#eeeeee"}>
                <CiLinkedin />
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </div>
    </>
  );
}
export default Footer;



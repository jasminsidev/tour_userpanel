import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Menu,Container,Stack} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import '../Style/Navbar.css';
import logo from "../Image/Gudies/logo.png"
function  Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'text.disabled' }} style={{backgroundColor:'revert' }} >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {/* <Link>exstory</Link> */}
              <Typography variant={'subtitle2'} color={'success.main'} style={{width:'100px'}} >
                <img src={logo} style={{width:'100%'}} />
              </Typography>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="#263238" ><MenuIcon   /> </IconButton>
              <Typography variant={'subtitle2'} color={'success.main'} width={"70px"} paddingY={"20px"} >
                <img src={logo} style={{width:'100%'}} />
              </Typography>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
           
                sx={{
                  display: { xs: 'block', md: 'none', },
                }}
              >
          
                <Stack >
                  <NavLink to={'/'} style={{ textDecoration: 'none' }} className={'hoverdesign'} >Home</NavLink>
                  <NavLink to={'/Destination'} style={{ textDecoration: 'none' }} className={'hoverdesign'} >Destination</NavLink>
                  <NavLink to={'/Tours'} style={{ textDecoration: 'none' }} className={'hoverdesign'} >Tours</NavLink>
                  <NavLink to={'/About'} style={{ textDecoration: 'none' }} className={'hoverdesign'} >  About us</NavLink>
                  <NavLink to={'/Contact'} style={{ textDecoration: 'none' }} className={'hoverdesign'} >Contact us</NavLink>
                </Stack>
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src='' />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
              <Stack spacing={3} direction={'row'} >
                <NavLink to={'/'} style={{ textDecoration: 'none' }} className={'hoverdesign'} >Home</NavLink>
                <NavLink to={'/Destination'} style={{ textDecoration: 'none' }} className={'hoverdesign'} >Destination</NavLink>
                <NavLink to={'/Tours'} style={{ textDecoration: 'none' }} className={'hoverdesign'} >Tours</NavLink>
                <NavLink to={'/About'} style={{ textDecoration: 'none' }} className={'hoverdesign'} >  About us</NavLink>
                <NavLink to={'/Contact'} style={{ textDecoration: 'none' }} className={'hoverdesign'} >Contact us</NavLink>
                <NavLink to={'/login'} style={{ textDecoration: 'none' }} className={'hoverdesign'} >
                </NavLink>
              </Stack>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}  >
                <Button variant="contained" color='success' href='/Destitution' >bookNow</Button>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
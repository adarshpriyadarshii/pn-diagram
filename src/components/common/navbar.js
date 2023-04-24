import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let navigate=useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleAbout=()=>{
    handleCloseNavMenu()
    navigate('/about')
  }
  const handleHome=()=>{
    handleCloseNavMenu()
    navigate('/')
  }
  const handleContact=()=>{
    handleCloseNavMenu()
    navigate('/contact')
  }

  return (
    <AppBar position="sticky" sx={{bgcolor:'#6a69d1'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            CONSTRUCTION PLANNING AND MANAGEMENT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem 
                    onClick={handleHome} 
                >
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem 
                    onClick={handleAbout} 
                >
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem 
                    onClick={handleContact} 
                >
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            onClick={handleHome}
          >
            CPM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' , 
                    flexDirection: 'row-reverse'} }}>
              <Button
                onClick={handleContact}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                Contact
              </Button>
              <Button
                onClick={handleAbout}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                About
              </Button>
              <Button
                onClick={handleHome}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                Home
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
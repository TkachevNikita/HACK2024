<<<<<<< HEAD
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HACK2024
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
=======
import AccentButton from "@components/ui/AccentButton.tsx";
import {Link} from "@mui/material";
import '@styles/common/Header.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Header = () => {
  return (
      <header className="header">
          <div className="header__container">
              <a href="#" className="header__logo">
                  <img src="https://paperbackdesign.com/wp-content/uploads/2015/04/generic-logo_150ppi-600x300px.jpg" alt="logo"/>
              </a>
              <nav className="header__nav">
                  <Link href="" className="header__nav--item">События</Link>
                  <Link href="" className="header__nav--item">Оценка</Link>
                  <Link href="" className="header__nav--item">Контакты</Link>
              </nav>

              <AccentButton>
                  <PersonOutlineOutlinedIcon/>
                  Войти
              </AccentButton>
          </div>
      </header>
  )
>>>>>>> develop
}

export default Header;

import React from "react";
import { Link, useLocation} from "react-router-dom";
import { IconButton, Drawer, List, ListItem, Box } from "@mui/material";

import { links } from "@shared/constants/navigationLinks";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccentButton from "@components/ui/AccentButton";
import DefaultLink from "@components/ui/DefaultLink";
import PrimaryTitle from "@components/ui/PrimaryTitle";
import withAuthRouteCheck from "@shared/hoc/withAuthRouteCheck";
import NavLink from "@components/ui/NavLink";

import '@styles/common/Header.css';

const Header: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [styles, setStyles] = React.useState({maxWidth: 1320, marginLeft: 'auto', marginRight: 'auto'})
    const route = useLocation().pathname
    const isPageCommands = route === '/HACK2024/commands'

    const toggleDrawer = (open: boolean) => {
        setIsDrawerOpen(open);
    };

    React.useEffect(() => {
        if (isPageCommands) {
            setStyles({maxWidth: 'none', margin: 0, padding: '20px 40px'})
        } else {
            setStyles({maxWidth: 1320, marginLeft: 'auto', marginRight: 'auto'})
        } 
    }, [route])

    return (
        <header className="header">
            <div className="header__container" style={styles}>
                <DefaultLink sx={{textDecoration: 'none'}} href="/" className="header__logo">
                    <PrimaryTitle>СЦЕНА</PrimaryTitle>
                </DefaultLink>

                <nav className="header__nav">
                    {links.map((i, id) => (
                        <NavLink end={i.isEnd} key={id} to={i.url}>
                            {i.title}
                        </NavLink>
                    ))}
                  
                </nav>

                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className="header__burger"
                    onClick={() => toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>

                <Drawer
                    anchor="right"
                    open={isDrawerOpen}
                    onClose={() => toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#fff'
                        }
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                        <IconButton onClick={() => toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {links.map((i, id) => (
                            <ListItem
                                key={id}
                                onClick={() => {
                                    toggleDrawer(false);
                                }}
                                sx={{ width: '100%', textAlign: 'center' }}
                            >
                                 <NavLink end={i.isEnd} key={id} to={i.url}>
                                    {i.title}
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

                <AccentButton>
                    <Link to="/HACK2024/sign-in">Войти</Link>
                </AccentButton>
            </div>
        </header>
    );
};

export default withAuthRouteCheck(Header);

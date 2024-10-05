import React from "react";
import {Link} from "react-router-dom";
import {IconButton, Drawer, List, ListItem, Box} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccentButton from "@components/ui/AccentButton";
import DefaultLink from "@components/ui/DefaultLink";
import PrimaryTitle from "@components/ui/PrimaryTitle";
import withAuthRouteCheck from "@shared/hoc/withAuthRouteCheck";
import '@styles/common/Header.css';

const links = [
    {
        url: '/HACK2024/',
        title: 'События'
    },
    {
        url: '/HACK2024/commands',
        title: 'Оценка'
    },
    {
        url: '/HACK2024/contacts',
        title: 'Контакты'
    },
];

const Header = () => {
    const [selected, setSelected] = React.useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawer = (open: boolean) => {
        setIsDrawerOpen(open);
    };

    return (
        <header className="header">
            <div className="header__container" style={{maxWidth: 1320, marginLeft: 'auto', marginRight: 'auto'}}>
                <DefaultLink sx={{textDecoration: 'none'}} href="/" className="header__logo">
                    <PrimaryTitle>СЦЕНА</PrimaryTitle>
                </DefaultLink>

                <nav className="header__nav">
                    {links.map((i, id) => (
                        <Link key={id} onClick={() => setSelected(id)} to={i.url} className="header__nav--item"
                              style={{color: selected === id ? '#1437F6' : ''}}>
                            {i.title}
                        </Link>
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
                                    setSelected(id);
                                    toggleDrawer(false);
                                }}
                                sx={{ width: '100%', textAlign: 'center' }}
                            >
                                <Link key={id} onClick={() => setSelected(id)} to={i.url} className="header__nav--item" style={{color: selected === id ? '#1437F6' : ''}}>{i.title}</Link>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

                <AccentButton>
                    <Link to="/HACK2024/sign-in"> Войти</Link>
                   
                </AccentButton>
            </div>
        </header>
    );
};

export default withAuthRouteCheck(Header);

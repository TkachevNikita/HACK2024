import AccentButton from "@components/ui/AccentButton";
import DefaultLink from "@components/ui/DefaultLink";
import PrimaryTitle from "@components/ui/PrimaryTitle";
import {Link} from "react-router-dom";
import withAuthRouteCheck from "@shared/hoc/withAuthRouteCheck";
import '@styles/common/Header.css'
import React from "react";

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
   
]

const Header = () => {
    const [selected, setSelected] = React.useState(0)
  return (
      <header className="header">
        <div className="header__container">
              <DefaultLink sx={{textDecoration: 'none'}} href="/" className="header__logo">
                 <PrimaryTitle>СЦЕНА</PrimaryTitle>
              </DefaultLink>
              <nav className="header__nav">
                {links.map((i, id) => <Link onClick={() => setSelected(id)} to={i.url} className="header__nav--item" style={{color: selected === id ? '#1437F6' : ''}}>{i.title}</Link>)}
              </nav>
              <AccentButton>
                  Войти
              </AccentButton>
              </div> 
      </header>
  )
}

export default withAuthRouteCheck(Header);
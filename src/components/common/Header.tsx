import PageContainer from "@components/ui/PageContainer"
import AccentButton from "@components/ui/AccentButton.tsx";
import {Link} from "@mui/material";
import '@styles/common/Header.css'

const Header = () => {
  return (
      <header className="header">
          <PageContainer className="header__container">
              <a href="#" className="header__logo">
                  <img src="https://paperbackdesign.com/wp-content/uploads/2015/04/generic-logo_150ppi-600x300px.jpg" alt="logo"/>
              </a>
              <nav className="header__nav">
                  <Link href="" className="header__nav--item">События</Link>
                  <Link href="" className="header__nav--item">Оценка</Link>
                  <Link href="" className="header__nav--item">Контакты</Link>
              </nav>

              <AccentButton>
                  Войти
              </AccentButton>
          </PageContainer>
      </header>
  )
}

export default Header
import Copyright from "@components/ui/Сopyright";
import { Link } from "@mui/material";
import withAuthRouteCheck from "@shared/hoc/withAuthRouteCheck";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import '@styles/common/Footer.css'

const Footer = () => {
    return (
        <footer className="footer" style={{ flex: '0 0 auto', marginTop: 2, }}>
            <div className="footer__container">
                <div style={{display: 'flex', alignItems: 'center', columnGap: 10, maxWidth: 1320}}>

                    <Link sx={{fontSize: '12px', color: 'white', lineHeight: 0}}><YouTubeIcon/></Link>
                    <Link sx={{fontSize: '12px', color: 'white', lineHeight: 0}}><TelegramIcon/></Link>
                    <Link sx={{fontSize: '12px', color: 'white', lineHeight: 0}}><WhatsAppIcon/></Link>
                    <Link sx={{fontSize: '12px', color: 'white', lineHeight: 0}}><InstagramIcon/></Link>
                </div>
                <Copyright>© 2024 Сайт "Сцена". Все права защищены.</Copyright>
            </div>
        </footer>
    )
}

export default withAuthRouteCheck(Footer);
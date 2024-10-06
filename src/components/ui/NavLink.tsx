import { NavLink as Link, NavLinkProps } from "react-router-dom";

import "@styles/ui/NavLink.css";

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { children, ...rest } = props;

  const activeLink = ({ isActive, isPending }) => {
    return isPending ? "pending" : isActive ? "hack2024-nav-link active" : "hack2024-nav-link"
  }

  return (
    <Link {...rest} className={activeLink}>
        {children}
    </Link>
  );
};

export default NavLink;

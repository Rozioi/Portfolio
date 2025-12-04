import type React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Header.module.scss";

interface INavLinkProps {
  href: string;
  label: string;
  activeLink: string;
  handleLinkClick: (link: string) => void;
}

export const NavLink: React.FC<INavLinkProps> = ({
  href,
  label,
  activeLink,
  handleLinkClick,
}) => {
  const location = useLocation();
  const isActive = activeLink === label.toLowerCase() || 
    (label === "Projects" && location.pathname.startsWith("/project"));

  if (href.startsWith("#")) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (location.pathname !== "/") {
        // If not on home page, navigate to home first
        window.location.href = `/${href}`;
      } else {
        handleLinkClick(`${label.toLowerCase()}`);
      }
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        className={
          isActive ? styles["active-link"] : styles.link
        }
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={isActive ? styles["active-link"] : styles.link}
    >
      {label}
    </Link>
  );
};

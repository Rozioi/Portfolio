import { Logo } from "../Logo/logo";
import styles from "./styles/Header.module.scss";
import { NavLink } from "./ui/NavLink";

type header = {
  activeLink: string;
  handleLinkClick: (link: string) => void;
};

interface navlinks {
  href: string;
  label: string;
}

const Header = ({ activeLink, handleLinkClick }: header) => {
  const navlinks: navlinks[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contacts", label: "Contacts" },
  ];

  return (
    <header className={styles.header}>
      {/*<p className={styles.logo}>rozioi</p>*/}
      <Logo />
      <nav className={styles["link-list"]}>
        {navlinks.map((link, index) => (
          <NavLink
            key={index}
            href={link.href}
            label={link.label}
            activeLink={activeLink}
            handleLinkClick={handleLinkClick}
          />
        ))}
        {/*<a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home");
          }}
          className={
            activeLink === "home" ? styles["active-link"] : styles.link
          }
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("about");
          }}
          className={
            activeLink === "about" ? styles["active-link"] : styles.link
          }
        >
          About
        </a>*/}
        {/* <a
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("projects");
                    }}
                    className={activeLink === "projects" ? styles['active-link'] : styles.link}
                >
                    Projects
                </a> */}
        {/*<a
          href="#contacts"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("contacts");
          }}
          className={
            activeLink === "contacts" ? styles["active-link"] : styles.link
          }
        >
          Contacts
        </a>*/}
      </nav>
    </header>
  );
};

export default Header;

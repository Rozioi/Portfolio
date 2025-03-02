import React, { useState } from "react";
import styles from '../assets/Header.module.scss';




const Header: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>("home");

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        const targetElement = document.getElementById(link);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", `#${link}`);
        }

       
    };

    return (
        <header className={styles.header}>
            <p className={styles.logo}>rozioi</p>
            <nav className={styles['link-list']}>
                <a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                         handleLinkClick("home")
                    }}
                    className={activeLink === "home" ? styles['active-link'] : styles.link}
                >
                    Home
                </a>
                <a
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("about");
                        
                    }}
                    className={activeLink === "about" ? styles['active-link'] : styles.link}
                >
                    About
                </a>
                <a
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("projects");
                    }}
                    className={activeLink === "projects" ? styles['active-link'] : styles.link}
                >
                    Projects
                </a>
                <a
                    href="#contacts"
                    onClick={(e) => {
                        e.preventDefault(); 
                        handleLinkClick("contacts");
                    }}
                    className={activeLink === "contacts" ? styles['active-link'] : styles.link}
                >
                    Contacts
                </a>
            </nav>
        </header>
    );
};

export default Header;
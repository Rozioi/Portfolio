import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../assets/Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <p className={styles.logo}>rozioi</p>
            <nav className={styles['link-list']}>
                <NavLink to="/" className={({isActive}) => 
                    isActive ? styles['active-link'] : styles.link
                }>
                    Home
                </NavLink>
                <NavLink to="/about" className={({isActive}) => 
                    isActive ? styles['active-link'] : styles.link
                }>
                    About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => 
                    isActive ? styles['active-link'] : styles.link
                }>
                    Projects
                </NavLink>
                <NavLink to="/contacts" className={({isActive}) => 
                    isActive ? styles['active-link'] : styles.link
                }>
                    Contacts
                </NavLink>
            </nav>
        </header>
    )
};

export default Header;

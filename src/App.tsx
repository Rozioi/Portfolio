import React, { useEffect, useLayoutEffect, useRef } from "react";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import homeStyles from "./assets/Home.module.scss";
import aboutStyles from "./assets/About.module.scss";
const App: React.FC = () => {

    const aboutRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);
    const scroll = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handlePopState = () => {
            const pathname = window.location.pathname;
            switch (pathname) {
                case '/about':
                    scroll(aboutRef);
                    break;
                case '/':
                default:
                    scroll(homeRef);
                    break;
            }
        };

        window.addEventListener('popstate', handlePopState);
        handlePopState();
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);


    return (
        <BrowserRouter>
            <div style={{ width: '100vw', height: '100vh' }}>
                <Header />
                <section className={homeStyles['section']} id="" ref={homeRef}>
                    <h4 className={homeStyles['hello-text']}>Hi! I am a Rozioi </h4>
                    <p className={homeStyles['description']}>I am a full-stack developer who likes to create thoughtful and scalable web applications. Clean code, high performance and user—friendly UI are my priorities.</p>
                    <div className={homeStyles['button-list']}>
                        <button className={homeStyles['button-fill']}>
                            Projects
                        </button>
                        <button className={homeStyles['button-empty']}>Contacts</button>
                    </div>

                </section>
                <section className={aboutStyles['section']} id="about" ref={aboutRef}>
                    <div className={aboutStyles['grid-container']}>
                        <div className={aboutStyles['about-me']}>
                            <h1>👨‍💻About me</h1>
                            <p>
                                Hi! I am Vanya, a passionate full-stack developer. At the age of 15, I have been creating modern, scalable web applications and thoughtful interfaces. My goal is to develop fast, user—friendly and beautiful digital products that make the web better.
                            </p>
                        </div>
                        <div className={aboutStyles['skills']}>
                            <h1>⚡Skills</h1>
                            <div className={aboutStyles['skills-icons']}>
                                <img src="assets/Logos/sqlite-original.png" alt="SQLite3" />
                                <img src="assets/Logos/postgresql-plain.png" alt="PostgreSQL" />
                                <img src="assets/Logos/mongodb-plain-wordmark.png" alt="MongoDB" />
                                <img src="assets/Logos/python-original.png" alt="Python" />
                                <img src="assets/Logos/javascript-original.png" alt="JavaScript" />
                                <img src="assets/Logos/typescript-original.png" alt="TypeScript" />
                                <img src="assets/Logos/express-original.png" alt="Express.js" />
                                <img src="assets/Logos/nodejs-plain.png" alt="Node.js" />
                                <img src="assets/Logos/html5-original.png" alt="HTML" />
                                <img src="assets/Logos/git-plain.png" alt="Git" />
                                <img src="assets/Logos/css3-original.png" alt="CSS" />
                                <img src="assets/Logos/scss-original.png" alt="SCSS" />
                                <img src="assets/Logos/figma-original.png" alt="Figma" />
                                <img src="assets/Logos/react-original.png" alt="React.js" />
                            </div>
                        </div>
                        <div className={aboutStyles['education']}>
                            <h1>🎓Education</h1>
                            <p>
                                I studied various disciplines using YouTube, articles and documentation.
                            </p>
                        </div>
                        <div className={aboutStyles['projects']}>
                            <h1>💼Projects</h1>
                            <p>
                                I have worked on various projects, including web applications, mobile apps, and design prototypes. My portfolio showcases my ability to create functional and visually appealing products.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </BrowserRouter>
    );
};

export default App;

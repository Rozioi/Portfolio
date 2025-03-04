import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import homeStyles from "./assets/Home.module.scss";
import aboutStyles from "./assets/About.module.scss";
import contactStyles from "./assets/Contact.module.scss";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";



const App: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>("home");

    const isManualScroll = useRef(false)

    const observeSections = () => {
        const sections = document.querySelectorAll('section');
        let activeSection: string | null = null;
        let timeoutId: NodeJS.Timeout | undefined;

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px 0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            if (isManualScroll.current) return; 

            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target.id !== activeSection) {
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        activeSection = entry.target.id;
                        window.history.pushState(null, "", `#${activeSection}`)
                        setActiveLink(activeSection);
                    }, 100);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));
    };

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash){handleLinkClick(hash)}
        else{handleLinkClick('home');};
        observeSections();
    }, []);

    const handleLinkClick = (link: string) => {
        isManualScroll.current = true; 
        setActiveLink(link);

        const targetElement = document.getElementById(link);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", `#${link}`);
        }

        
        setTimeout(() => {
            isManualScroll.current = false;
        }, 1000);
    };

    return (
        <BrowserRouter>
            <div style={{ width: '100vw', height: '100vh' }}>
                <Header activeLink={activeLink} handleLinkClick={handleLinkClick} />
                <section className={homeStyles['section']} id="home">
                    <h4 className={homeStyles['hello-text']}>Hi! I am a Rozioi </h4>
                    <p className={homeStyles['description']}>I am a full-stack developer who likes to create thoughtful and scalable web applications. Clean code, high performance and user—friendly UI are my priorities.</p>
                    <div className={homeStyles['button-list']}>
                        {/* <button className={homeStyles['button-fill']}>
                            Projects
                        </button> */}
                        <button onClick={() => handleLinkClick('contacts')} className={homeStyles['button-empty']}>Contacts</button>
                    </div>

                </section>
                <section className={aboutStyles['section']} id="about">
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
                <section id="contacts" className={contactStyles['section']}>
                    <h2 className={contactStyles['title']}>Написать мне</h2>
                    <p className={contactStyles['subtitle']}>
                        Не стесняйтесь связаться со мной, если у вас есть вопросы или вы хотите обсудить возможность сотрудничества.
                    </p>
                    <div className={contactStyles['list-button']}>
                        <div className={contactStyles['button-share']}>
                            <a
                                href="mailto:ivanzheleznuy@gmail.com?subject=Предложение сотрудничества&body=Здравствуйте, Иван!"

                                className={contactStyles['button-link']} >

                                <div className={contactStyles['block-logo1']}>
                                    <MdOutlineEmail className={contactStyles['icon']} />
                                </div>
                                <h1 className={contactStyles['button-title']}>Email</h1>
                                <p className={contactStyles['button-text']}>ivanzheleznuy@gmail.com</p>
                            </a>
                        </div>
                        <div className={contactStyles['button-share']}>
                            <a
                                href="https://t.me/rozioi"
                                className={contactStyles['button-link']}
                                target="_blank"
                            >
                                <div className={contactStyles['block-logo2']}>
                                    <FaTelegram className={contactStyles['icon']} />
                                </div>
                                <h1 className={contactStyles['button-title']}>Telegram</h1>
                                <p className={contactStyles['button-text']}>@rozioi</p>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </BrowserRouter>
    );
};

export default App;

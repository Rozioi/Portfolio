import styles from "./styles/Home.module.scss";

const Home = () => {
  return (
    <section className={styles.homeSection} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.helloText}>
            Привет, я <span className={styles.gradientText}>rozioi</span>
          </h1>
          <p className={styles.description}>
            Full-stack разработчик, создающий современные веб-приложения
            с использованием React, TypeScript и Node.js
          </p>
          <div className={styles.buttonList}>
            <a 
              href="#projects" 
              className={styles.buttonFill}
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Мои проекты
            </a>
            <a 
              href="#about" 
              className={styles.buttonEmpty}
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Обо мне
            </a>
          </div>
        </div>
        <div className={styles.decorativeElements}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
    </section>
  );
};

export default Home;

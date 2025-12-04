import styles from "./styles/About.module.scss";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Fastify",
    "CSS3",
    "SCSS",
    "Git",
    "Figma",
  ];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>Обо мне</h2>

        <div className={styles.textContent}>
          <p className={styles.description}>
            Я увлеченный full-stack разработчик с опытом создания современных
            веб-приложений. Специализируюсь на разработке пользовательских
            интерфейсов и серверных решений, используя передовые технологии.
          </p>
          <p className={styles.description}>
            Моя цель - создавать качественные, масштабируемые и удобные
            приложения, которые решают реальные проблемы пользователей.
          </p>
        </div>

        <div className={styles.skillsSection}>
          <h3 className={styles.skillsTitle}>Технологии</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

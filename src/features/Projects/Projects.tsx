import { Link } from "react-router-dom";
import styles from "./styles/Projects.module.scss";

export interface Project {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  screenshots: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "doctor-chat",
    name: "Doctor Chat",
    description:
      "Инновационное веб-приложение для общения с врачами в режиме реального времени. Платформа предоставляет удобный интерфейс для консультаций, записи на прием и управления медицинскими данными. Приложение включает в себя систему видеозвонков, чат в реальном времени, электронную медицинскую карту и интеграцию с различными медицинскими системами.",
    shortDescription: "Веб-приложение для онлайн-консультаций с врачами",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSocket",
      "Socket.io",
      "JWT",
      "SCSS",
    ],
    screenshots: ["/screenshots/welcome.png"],
    githubUrl: "https://github.com/example/doctor-chat",
    liveUrl: "https://doctor-chat.example.com",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Мои Проекты</h2>
        <p className={styles.subtitle}>Здесь представлены мои лучшие работы</p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={styles.projectCard}
            >
              <div className={styles.projectImage}>
                {project.screenshots[0] ? (
                  <img src={project.screenshots[0]} alt={project.name} />
                ) : (
                  <div className={styles.placeholderImage}>
                    <span>{project.name}</span>
                  </div>
                )}
                <div className={styles.overlay}>
                  <span className={styles.viewProject}>
                    Посмотреть проект →
                  </span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDescription}>
                  {project.shortDescription}
                </p>
                <div className={styles.technologies}>
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={styles.techTag}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
export { projects };

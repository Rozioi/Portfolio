import { useParams, Link } from "react-router-dom";
import { projects } from "./Projects";
import styles from "./styles/ProjectDetail.module.scss";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>Проект не найден</h2>
        <Link to="/#projects" className={styles.backButton}>
          Вернуться к проектам
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.projectDetail}>
      <div className={styles.container}>
        <Link to="/#projects" className={styles.backLink}>
          ← Назад к проектам
        </Link>

        <div className={styles.header}>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.screenshots}>
          <h2 className={styles.sectionTitle}>Скриншоты проекта</h2>
          <div className={styles.screenshotsGrid}>
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className={styles.screenshotItem}>
                <img
                  src={screenshot}
                  alt={`${project.name} screenshot ${index + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/1200x800/1a1a2e/8551ff?text=${encodeURIComponent(project.name)}+Screenshot+${index + 1}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.technologiesSection}>
            <h2 className={styles.sectionTitle}>Технологии</h2>
            <div className={styles.technologies}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.linksSection}>
            <h2 className={styles.sectionTitle}>Ссылки</h2>
            <div className={styles.links}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <span>🔗</span> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <span>🌐</span> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;


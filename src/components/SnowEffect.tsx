import { useEffect, useRef } from "react";
import styles from "./SnowEffect.module.scss";

const SnowEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      console.warn('SnowEffect: container not found');
      return;
    }

    const snowflakes: HTMLDivElement[] = [];
    const maxSnowflakes = 150;

    const createSnowflake = () => {
      if (snowflakes.length >= maxSnowflakes) {
        const oldSnowflake = snowflakes.shift();
        if (oldSnowflake) {
          oldSnowflake.remove();
        }
      }

      const snowflake = document.createElement("div");
      snowflake.className = styles.snowflake;
      
      const size = Math.random() * 8 + 4;
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 2;
      const opacity = Math.random() * 0.5 + 0.6;
      const drift = (Math.random() - 0.5) * 60;
      
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${left}%`;
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.animationDelay = `${delay}s`;
      snowflake.style.opacity = `${opacity}`;
      snowflake.style.setProperty('--drift', `${drift}px`);
      
      container.appendChild(snowflake);
      snowflakes.push(snowflake);
    };

    // Создаем начальные снежинки сразу
    for (let i = 0; i < 80; i++) {
      setTimeout(() => createSnowflake(), i * 50);
    }

    // Продолжаем создавать новые снежинки
    const interval = setInterval(createSnowflake, 120);

    return () => {
      clearInterval(interval);
      snowflakes.forEach(snowflake => snowflake.remove());
    };
  }, []);

  return <div ref={containerRef} className={styles.snowContainer} />;
};

export default SnowEffect;


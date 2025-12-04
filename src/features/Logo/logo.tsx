import { useState } from "react";
import styles from "./styles/Logo.module.scss";

export const Logo = () => {
  const [santaType, setSantaType] = useState("🎅"); // Стандартный Санта

  // Разные варианты эмодзи Санты
  const santaEmojis = [
    "🎅", // Классический Санта
    "🤶", // Миссис Клаус
    "🧑‍🎄", // Санта нейтрального пола
    "🎅🏻", // Санта со светлой кожей
    "🎅🏽", // Санта со средним тоном кожи
    "🎅🏿", // Санта с темной кожей
  ];

  // Функция для случайной смены эмодзи
  const changeSanta = () => {
    const randomIndex = Math.floor(Math.random() * santaEmojis.length);
    setSantaType(santaEmojis[randomIndex]);
  };

  return (
    <div className={styles.logoContainer}>
      <span
        className={styles.santaEmoji}
        onClick={changeSanta}
        role="img"
        aria-label="Новогодний Санта"
        title="Нажмите, чтобы изменить Санту!"
      >
        {santaType}
      </span>
      <p className={styles.logo}>rozioi</p>
    </div>
  );
};

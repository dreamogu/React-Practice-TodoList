import React, { useState } from 'react';
import styles from './TodoHeader.module.css';
import { useDarkMode } from '../../context/DarkModeContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function TodoHeader({ onFilter }) {
  const filters = ['All', 'Active', 'Complete'];
  const [selected, setSelected] = useState('All');
  const handleClick = (filtered) => {
    setSelected(filtered);
    onFilter(filtered);
  };
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button
        className={styles.modeBtn}
        onClick={() => toggleDarkMode()}
      >
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
      <nav className={styles.nav}>
        {filters.map((item, idx) => (
          <button
            key={idx}
            className={`${styles.navBtn} ${
              item === selected ? `${styles.selected}` : ''
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}

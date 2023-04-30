import React, { useState } from 'react';
import styles from './TodoHeader.module.css';

export default function TodoHeader({ onFilter }) {
  const filters = ['All', 'Active', 'Complete'];
  const [selected, setSelected] = useState('All');
  const handleClick = (filtered) => {
    setSelected(filtered);
    onFilter(filtered);
  };
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {filters.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}

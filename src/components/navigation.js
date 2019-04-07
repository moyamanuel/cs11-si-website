import React from 'react'
import Link from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/quizzes/">Quizzes</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/resources/">Resources</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </nav>
)
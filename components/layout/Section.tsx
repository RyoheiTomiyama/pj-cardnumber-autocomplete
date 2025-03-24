import type React from 'react'

import styles from './Section.module.css'

const Section: React.FCX = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Section

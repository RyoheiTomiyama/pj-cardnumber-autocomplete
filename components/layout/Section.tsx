import type { PropsWithChildren } from 'react'

import styles from './Section.module.css'

const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Section

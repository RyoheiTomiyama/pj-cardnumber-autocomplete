import Link from 'next/link'
import type React from 'react'

import styles from '@/components/layout/Footer.module.css'

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={`${className} ${styles.wrapper}`}>
      <div className={styles.inner}>
        <div className={styles.copyright}>
          <Link href="/">Bonos</Link> © 2022
        </div>
      </div>
    </footer>
  )
}

export default Footer

import styles from '@/components/layout/Footer.module.css'
import Link from 'next/link'
import React from 'react'

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

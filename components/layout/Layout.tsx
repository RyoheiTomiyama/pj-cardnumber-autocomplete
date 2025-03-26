import type { PropsWithChildren } from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import styles from '@/components/layout/Layout.module.css'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Header className={styles.header} />
        <main className={styles.main}>{children}</main>
        <Footer className={styles.footer} />
      </div>
    </div>
  )
}

export default Layout

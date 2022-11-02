import React from 'react'
import styles from '@/components/layout/Layout.module.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const Layout: React.FCX = ({ children }) => {
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

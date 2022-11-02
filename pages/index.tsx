import Card from '@/components/Card/Card'
import Section from '@/components/layout/Section'
import Head from 'next/head'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>カード番号 確認ツール</title>
        <meta
          name="description"
          content="ブラウザに登録されたクレジットカード情報を確認できるサービスです。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero}>
        <Section>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1>カード番号 確認ツール</h1>
              <h2>ブラウザに登録されたカード情報を確認できます</h2>
              <p>
                入力フォームをクリックしてください。
                <br />
                カード情報が保存しているブラウザであればカード候補が表示されます。
              </p>
              <p>選択したらカード情報が自動入力されます。</p>
              <h2>オフラインでも利用できます</h2>
              <p>
                入力された情報が外部に送信は決してしていませんので、安心してご利用ください。
                <br />
                ご心配の場合はオフラインにした上でご利用いただければと思います。
              </p>
            </div>
            <div className={styles.heroCard}>
              <Card className={styles.card} />
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Card from '@/components/Card/Card'
import Section from '@/components/layout/Section'
import styles from './Home.module.css'
import heroImage from '@/assets/images/hero_1.png'
import guideImage from '@/assets/images/guide_1.png'

export default function Home() {
  const embedCodepen = `
  <p class="codepen" data-height="300" data-default-tab="html" data-slug-hash="yLEemOB" data-user="RyoheiTomiyama" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/RyoheiTomiyama/pen/yLEemOB">
  クレジット番号確認</a> by RyoheiTomiyama (<a href="https://codepen.io/RyoheiTomiyama">@RyoheiTomiyama</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
  </p>
  <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
  `
  return (
    <div>
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
            <h1 className={styles.heroTitle}>カード番号 確認ツール</h1>
            <div className={styles.heroCard}>
              <Card className={styles.card} />
            </div>
            <div className={styles.heroContent}>
              <h2>ブラウザに登録されたカード情報を確認できます</h2>
              <p>
                入力フォームをクリックしてください。
                <br />
                カード情報が保存しているブラウザであればカード候補が表示されます。
              </p>
              <p>
                <Image
                  src={heroImage}
                  alt="入力フォームをクリックするとカード候補が表示されます"
                  width="300"
                />
              </p>
              <p>選択したらカード情報が自動入力されます。</p>
              <h2>オフラインでも利用できます</h2>
              <p>
                入力された情報が外部に送信は決してしていませんので、安心してご利用ください。
                <br />
                ご心配の場合はオフラインにした上でご利用いただければと思います。
              </p>
            </div>
          </div>
        </Section>
      </div>
      <div className="guideContent">
        <Section>
          <h1>なぜツールを作成したのか</h1>
          <p>
            カード番号
            確認ツールをなぜ作ろうと思ったのかというと、ECサイトで決済を行おうと思った際に自動入力されないときがあり、財布からクレジットカードを取り出しカード番号を入力しなければならない場面に遭遇することが時々あった。
          </p>
          <p>
            近くに財布があるならまだ良いが、遠かったらカード番号を確認するのが面倒だ。
            <br />
            そんなときにWebサイトでカード番号を確認してコピペできるサービスがあれば良いなと思い、作成に至りました。
          </p>
          <h2>以前はChromeの設定画面から確認できていた？</h2>
          <p>
            「chrome カード情報
            確認」と検索するといくつかの記事がヒットして、Chromeの設定画面からカード番号が確認できますよと伝えている。
            <br />
            しかし、実際のその画面を確認しにいくと、セキュリティ的な問題か、カード番号の下4桁だけが見えるだけですべてを確認する術がなくなってしまったようだ。
          </p>
          <p>
            <Image
              src={guideImage}
              alt="カード番号の下4桁だけが見えるだけですべてを確認する術がなくなってしまった"
              width="400"
            />
          </p>
          <h1>どう実現したか</h1>
          <p>
            入力フォームには自動補完autocompleteという機能がある。
            <br />
            <a
              href="https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/autocomplete"
              target="_blank"
              rel="noreferrer"
            >
              https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/autocomplete
            </a>
          </p>
          <blockquote>
            HTML の autocomplete
            属性は、ウェブ開発者は入力欄にどの種類の情報が期待されているかをブラウザーに示唆することができるのに加え、ユーザーエージェントがフォーム入力欄の値を埋めるための自動支援を提供する必要があることを指定することができます。
          </blockquote>
          <p>
            この自動補完の中にクレジットカード情報を自動入力できる機能がある。
            <br />
            具体的には以下のソースコードで実現できる。
          </p>
          <div dangerouslySetInnerHTML={{ __html: embedCodepen }}></div>
        </Section>
      </div>
    </div>
  )
}

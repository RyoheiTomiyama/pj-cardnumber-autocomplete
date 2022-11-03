import GoogleTagManager from '@/components/common/GoogleTagManager'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <GoogleTagManager.NoScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

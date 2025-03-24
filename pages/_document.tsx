import { Head, Html, Main, NextScript } from 'next/document'

import GoogleTagManager from '@/components/common/GoogleTagManager'

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

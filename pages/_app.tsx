import 'reset-css'
import '@/styles/common/variables.css'
import '@/styles/globals.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import GoogleAdsense from '@/components/common/GoogleAdsense'
import GoogleTagManager from '@/components/common/GoogleTagManager'
import DefaultLayout from '@/components/layout/Layout'

export type NextPageWithLayout = NextPage & {
  Layout?: React.ComponentType
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || DefaultLayout

  return (
    <Layout {...pageProps}>
      <GoogleTagManager />
      <GoogleAdsense />
      <Component {...pageProps} />
    </Layout>
  )
}

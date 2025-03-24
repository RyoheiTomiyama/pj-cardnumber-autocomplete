import 'reset-css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '@/styles/common/variables.css'
import '@/styles/globals.css'
import DefaultLayout from '@/components/layout/Layout'
import GoogleTagManager from '@/components/common/GoogleTagManager'
import GoogleAdsense from '@/components/common/GoogleAdsense'

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

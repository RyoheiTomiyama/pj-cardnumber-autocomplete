import Script from 'next/script'

import siteConfig from '@/utils/siteConfig'

const GoogleAdsense: React.FC = () => {
  if (!siteConfig.adsenseClientId) {
    return null
  }
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClientId}`}
      crossOrigin="anonymous"
      strategy="beforeInteractive"
    ></Script>
  )
}

export default GoogleAdsense

import siteConfig from '@/utils/siteConfig'
import Script from 'next/script'
import React from 'react'

const GoogleAdsense: React.FC = () => {
  if (!siteConfig.adsenseClientId) {
    return null
  }
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClientId}`}
      crossOrigin="anonymous"
    ></Script>
  )
}

export default GoogleAdsense

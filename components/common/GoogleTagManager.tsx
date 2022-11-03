import siteConfig from '@/utils/siteConfig'
import Script from 'next/script'
import React from 'react'

type WithNoScript = {
  NoScript: React.ComponentType
}

const GoogleTagManager: React.FC & WithNoScript = () => {
  if (!siteConfig.googleTagManagerId) {
    return null
  }
  return (
    <Script
      id="google-tag-manager"
      dangerouslySetInnerHTML={{
        __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${siteConfig.googleTagManagerId}');
        `,
      }}
    ></Script>
  )
}

const NoScript: React.FC = () => {
  if (!siteConfig.googleTagManagerId) {
    return null
  }
  return (
    <noscript
      id="google-tag-manager-noscript"
      dangerouslySetInnerHTML={{
        __html: `
        <!-- Google Tag Manager (noscript) -->
        <iframe src="https://www.googletagmanager.com/ns.html?id=${siteConfig.googleTagManagerId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
        <!-- End Google Tag Manager (noscript) -->
        `,
      }}
    ></noscript>
  )
}
GoogleTagManager.NoScript = NoScript

export default GoogleTagManager

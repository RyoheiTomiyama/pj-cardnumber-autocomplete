export type GoogleTagManagerId = `GTM-${string}`

const siteConfig = {
  domain: process.env.DOMAIN || 'cardnumber.bonos.work',
  siteUrl: process.env.SITE_URL || 'https://cardnumber.bonos.work',
  siteName: 'カード番号 確認ツール',
  title: 'カード番号 確認ツール',
  // titleTemplate: 'カード番号 確認ツール',
  // titleSeparator: '|',
  description:
    'ブラウザに登録されたクレジットカード情報を確認できるサービスです。',
  // adsenseClientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
  googleTagManagerId: process.env.NEXT_PUBLIC_GOOGLE_MANAGER_ID,
} as const

export default siteConfig

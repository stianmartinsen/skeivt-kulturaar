/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'cdn.sanity.io'],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['nb-NO'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'nb-NO'
  },
}

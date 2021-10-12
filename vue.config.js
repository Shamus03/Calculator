module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/calculator/'
    : '/',
  pwa: {
    themeColor: '#000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
}

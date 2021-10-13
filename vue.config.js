module.exports = {
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

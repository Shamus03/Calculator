module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/calculator/'
    : '/',
  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
}

/* eslint-disable */
const withLess = require('@zeit/next-less')
const withFonts = require('next-fonts')
const withImages = require('next-images')

const prod = process.env.NODE_ENV === 'production'

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withImages(withFonts(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  assetPrefix: prod ? '/mai-te-rang' : '',
  webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
          fs: 'empty'
      }
      return config
  },
})))

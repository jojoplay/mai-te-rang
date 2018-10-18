/* eslint-disable */
const withLess = require('@zeit/next-less')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

const assetPrefix = isProd ? '' : ''

module.exports = withImages(withFonts(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  assetPrefix: assetPrefix,
  webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
          fs: 'empty'
      }
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
        }),
      )
      return config
  },
})))

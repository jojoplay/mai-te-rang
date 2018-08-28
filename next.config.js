const withCss = require('@zeit/next-css')

/* eslint-disable */

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => {}
}
const prod = process.env.NODE_ENV === 'production'
const css = withCss()

module.exports = {
    assetPrefix: prod ? '/mai-te-rang' : '',
    'process.env.BACKEND_URL': prod? '/Next-React-Components' : '',
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        }

        return config
    },
    ...css,
}

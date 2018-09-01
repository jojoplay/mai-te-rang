import Head from 'next/head'

import '@app/assets/less/styles.less'

const assetPrefix = process.env.ASSET_PREFIX

export default ({ children, __NEXT_DATA__ }) =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href={`${assetPrefix}/_next/static/style.css`} />
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
    {children}
  </div>

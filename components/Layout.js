import Head from 'next/head'

import '@app/assets/less/styles.less'
import HeaderImage from '@app/assets/images/header.jpg'

const assetPrefix = process.env.ASSET_PREFIX

export default ({ children, __NEXT_DATA__ }) =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta property="og:title" content="ไม้ตีรัง บ้านนก ราคาถูก - ขายไม้ตีรัง ไม้ปิดมุม สำหรับสร้างบ้านนกนางแอ่น" />
      <meta property="og:description " content="จัดจำหน่ายไม้ตีรัง และไม้ปิดมุม ในราคาถูก ( ติดต่อที่ 096-542-4144 หรือ ID line kokokookai) ด้วยประสบการณ์และความเชี่ยวชาญในวงการไม้มานานกว่า 30 ปี ทางเรามีความเข้าใจในการผลิตไม้ตีรัง ไม้ปิดมุมเป็นอย่างดี" />
      <meta property="og:image" content={HeaderImage} />
      <meta name="description" content="จัดจำหน่ายไม้ตีรัง และไม้ปิดมุม ในราคาถูก ( ติดต่อที่ 096-542-4144 หรือ ID line kokokookai) ด้วยประสบการณ์และความเชี่ยวชาญในวงการไม้มานานกว่า 30 ปี ทางเรามีความเข้าใจในการผลิตไม้ตีรัง ไม้ปิดมุมเป็นอย่างดี" />
      <meta name="keywords" content="ไม้ตีรัง,บ้านนก,ไม้ปิดมุม,ไม้ตีรัง บ้านนก ราคาถูก" />
      <meta name="author" content="ไม้ตีรัง บ้านนก ราคาถูก" />
      <link rel="canonical" href="https://baan-nok.com/" />
      <link rel='stylesheet' href={`${assetPrefix}/_next/static/style.css`} />
      <title>ไม้ตีรัง บ้านนก ราคาถูก - ขายไม้ตีรัง ไม้ปิดมุม สำหรับสร้างบ้านนกนางแอ่น</title>
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
    {children}
  </div>

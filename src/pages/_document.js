import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <title>李孟哲</title>
        <meta name="description" content="李孟哲的个人博客" />
        <meta
          name="keywords"
          content="李孟哲, li mengzhe, limengzhe, 前端开发, Web develop"
        />
      </Head>
      <body className="text-sm">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

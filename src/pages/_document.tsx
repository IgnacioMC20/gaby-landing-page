import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* make body 100% height and width */}
      <body style={{
        margin: 0,
        padding: 0,
        width: '100%',
        height: 'calc(100vh - 80px)',
        background: '#f1f2f6'
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <title>iknite</title>
      <link rel="shortcut icon" href="logo.png" />
      <meta
          name="description"
          content="Discover iknite, see our projects and experience our professional developers and designers."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

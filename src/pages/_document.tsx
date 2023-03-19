import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@100&family=Poppins:wght@400;500&display=swap"
          />
          <style dangerouslySetInnerHTML={{
            __html: `</style>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@100&family=Poppins:wght@400;500&display=swap"
                media="print"
                onload="this.media='all';"
              />
              <style>`
          }}></style>
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@100&family=Poppins:wght@400;500&display=swap"
            />
          </noscript>

        </Head>
        <body>
          <ColorModeScript initialColorMode={'light'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
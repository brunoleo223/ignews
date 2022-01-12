/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document{
    render() {
        return (
            <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}
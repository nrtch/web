/**
 * @format
 * @flow
 */

import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Fonts from 'styles/Fonts';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#f03a63" />
          <meta name="theme-color" content="#ffffff" />
          <script
            dangerouslySetInnerHTML={{
              __html: `var a = new Image();
              a.onload = a.onerror = function() {
                document.documentElement.className+=' '+(a.height==2?'':'no-')+'webp';
              };
              a.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
            `,
            }}
          />
          <style>{`a { color: #f03a63; }`}</style>
          <Fonts
            list={[
              { family: 'Fira Mono', name: 'Fira Mono Regular', weight: 400 },
              { family: 'Fira Mono', name: 'Fira Mono Medium', weight: 500 },
              { family: 'Fira Mono', name: 'Fira Mono Bold', weight: 700 },
              {
                family: 'Fira Sans',
                name: 'Fira Sans ExtraLight',
                weight: 200,
              },
              { family: 'Fira Sans', name: 'Fira Sans Book', weight: 400 },
              { family: 'Fira Sans', name: 'Fira Sans Bold', weight: 700 },
            ]}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

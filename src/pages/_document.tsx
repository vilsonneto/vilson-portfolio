/* eslint-disable @next/next/inline-script-id */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-Br">
      <Head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PFBHKSJJ')`}
        </Script>
        <Script id="google-analytics-script" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}', {
          page_path: window.location.pathname,
          });
    `}
        </Script>
        <title>Vilson Padilha — Frontend Developer B2B</title>
        <meta
          name="keywords"
          content="Frontend Developer, React, TypeScript, Next.js, WebSocket, B2B, JavaScript, Node.js, Tailwind CSS, Vilson Padilha"
        />
        <meta name="author" content="Vilson Padilha" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Frontend Developer especializado em aplicações B2B de alta complexidade. Arquitetura WebSocket, estado em tempo real e 1.258+ commits em 4 sistemas em produção."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Vilson Padilha — Frontend Developer B2B"
        />
        <meta property="og:site_name" content="Vilson Padilha Portfolio" />
        <meta
          property="og:description"
          content="Frontend Developer especializado em aplicações B2B de alta complexidade. Arquitetura WebSocket, estado em tempo real e 1.258+ commits em 4 sistemas em produção."
        />
        <meta property="og:url" content="https://vilsonpadilha.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vilson Padilha — Frontend Developer B2B" />
        <meta
          name="twitter:description"
          content="Frontend Developer especializado em aplicações B2B de alta complexidade. Arquitetura WebSocket, estado em tempo real e 1.258+ commits em produção."
        />

        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese" />

        <meta
          name="google-site-verification"
          content="iUbHbHYvVfmHeW-nHauAxx4h65_l2nqLQeyKeewuRBY"
        />

        <link rel="canonical" href="https://vilsonpadilha.vercel.app/" />
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFBHKSJJ"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

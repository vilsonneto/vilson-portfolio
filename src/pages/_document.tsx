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
        <title>Vilson Padilha - Desenvolvedor Fullstack Web</title>
        <meta
          name="keywords"
          content="Desenvolvedor Fullstack, Front-end, Back-end, HTML5, CSS3, JavaScript, Typescript, React, Node.js, Python, Django, Flask, SQL"
        />
        <meta name="author" content="Vilson Padilha" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Desenvolvedor Fullstack Web especializado em Front-end, apaixonado por transformar ideias em código. Explore meus projetos e conheça minha jornada na programação."
        />
        {/* <meta name="image" content="[URL_DA_IMAGEM]" /> */}

        <meta
          property="og:title"
          content="Vilson Padilha - Desenvolvedor Fullstack Web"
        />
        <meta property="og:site_name" content="Vilson Padilha Portfolio" />
        <meta
          property="og:description"
          content="Desenvolvedor Fullstack Web especializado em Front-end, apaixonado por transformar ideias em código. Explore meus projetos e conheça minha jornada na programação."
        />
        {/* <meta property="og:image" content="[URL_DA_IMAGEM]" /> */}
        <meta property="og:url" content="https://vilsonpadilha.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* <meta name="twitter:image" content="[URL_DA_IMAGEM]" /> */}
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

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-Br">
      <Head>
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
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Luka Minđek - a fullstack developer"/>
        <meta name="description" content="Projekti i biografija - Luka Minđek"/>
        <meta property="og:title" content="Luka Minđek - a fullstack developer"/>
        <meta property="og:description" content="Explore the artistic creations and restoration work by Valentina Meštrić, an awarded artist and restorer." />
        <meta property="og:image" content="https://evarazdin.hr/upload/publish/389537/qwqwedefftrr_6038feda8d0fe.jpg" />
        <meta property="og:url" content="lukamindek.com" />
        <meta name="keywords" content="developer, programer, fullstack, backend, frontend, luka, minđek, sveti ilija, web, web-stranica, izrada web stranica, web dizajn, AI, umjetna inteligencija"/>
        <meta name="author" content="Luka Minđek"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>      
        <title>Luka Minđek</title>
      </Head>
      <body style={{background: "rgba(1, 1, 1, 0.2)",
                    color: 'black',
                    fontFamily: "Ubuntu, sans-serif"
                    }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

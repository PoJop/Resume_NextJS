import React from 'react'
import '../styles/globals.scss'
import Head from 'next/head'
import { language, DataContext } from "../contexts/data-context.js"

function MyApp({ Component, pageProps }) {
  const [currentLanguage, setCurrentLanguage] = React.useState(language.en)

  const toggleLanguage = (lang = "en") => {
    Object.keys(language).forEach(key => key === lang && setCurrentLanguage(language[key]))
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" /> */}
      </Head>
      <DataContext.Provider value={{ language: currentLanguage, toggleLanguage }}>
          <Component {...pageProps} />
      </DataContext.Provider>
    </>

  )
}

export default MyApp

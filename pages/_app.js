import React from 'react'
import '../styles/globals.scss'
import Head from 'next/head'
import { language, DataContext } from "../contexts/data-context.js"
import { AppContext } from '../contexts/app-context'

function MyApp({ Component, pageProps }) {
  const [currentLanguage, setCurrentLanguage] = React.useState(language.en)

  const [context, setContext] = React.useState({
    orientation: false,
    gravity: true,
    interaction: false,
    navRef: null,
  });

  const toggleLanguage = (lang = "en") => Object.keys(language).forEach(key => key === lang && setCurrentLanguage(language[key]))

  React.useEffect(() => {
    hideAddressBar();
    window.addEventListener("orientationchange", function () {
      hideAddressBar();
    }, false);
  }, [])

  const hideAddressBar = () => {
    setTimeout(function () {
      document.body.style.height = window.outerHeight + 'px';
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 200);
    }, 100);
    return false;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Resume O.Kostetzkiy 😎</title>
        <meta name="robots" content="all" />
        <meta name="description" content="Middle front-end developer resume" />
      </Head>
      <DataContext.Provider value={{ language: currentLanguage, toggleLanguage }}>
        <AppContext.Provider value={[context, setContext]}>
          <Component {...pageProps} />
        </AppContext.Provider>
      </DataContext.Provider>
    </>

  )
}

export default MyApp

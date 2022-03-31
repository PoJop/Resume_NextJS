import React from 'react'
import '../styles/globals.scss'
import Head from 'next/head'
import { language, DataContext } from "../contexts/data-context.js"
import { AppContext } from '../contexts/app-context'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const [currentLanguage, setCurrentLanguage] = React.useState(language.en)
  const router = useRouter()

  const [context, setContext] = React.useState({
    orientation: false,
    gravity: true,
    interaction: false,
    navRef: null,
  });
  // React.useLayoutEffect(() => {
  //   console.log(location.href)
  //   if(location.href.includes("/mobile")) {
  //     // router.push('/')
  //   }
  // }, [])

  const toggleLanguage = (lang = "en") => Object.keys(language).forEach(key => key === lang && setCurrentLanguage(language[key]))

  React.useEffect(() => {
    setTimeout(function () { window.scrollTo(0, 1) }, 100)
  }, [])

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

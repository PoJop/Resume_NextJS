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
  React.useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Resume O.Kostetzkiy 😎</title>
        <meta name="robots" content="all" />
        <meta name="description" content="Middle front-end developer resume" />
        <meta name='freelancehunt' content='14e44263355e0c3' />
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

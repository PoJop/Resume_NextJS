import React from 'react'
import { DesktopFrame } from '../components/DesktopFrame'
import { MobileFrame } from '../components/MobileFrame'


export default function Home() {
  const [windowSize, setWindowSize] = React.useState({
    width: 0,
    height: 0
  })
  let URL = null
  React.useEffect(() => {
    URL = location.href
  }, [])
  React.useEffect(() => {
    const setSize = () => {
      setWindowSize({
        ...windowSize,
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", () => {
      setSize()
    }, false);
    setSize()
  }, [])
  return (
    <>
      {windowSize.width < 768 ? (
        <MobileFrame />
      ) : (
        <DesktopFrame />
      )}
    </>
  )
}
{/* <iframe 
    style={{position: 'absolute', zIndex: 1000, top: 0, left: 0}}
     src={`${location.href}N57pKye83G`} width={360} height={640} align="left">
    </iframe> */}
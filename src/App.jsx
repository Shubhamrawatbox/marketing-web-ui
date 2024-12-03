import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { HeroScrollBanner } from './components/bannerContainer'
import { HeroImagesSlider } from './components/heroImageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroImagesSlider/>
    <HeroScrollBanner/>
      {/* <NavbarDemo/> */}
    </>
  )
}

export default App

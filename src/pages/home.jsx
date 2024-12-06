import React from 'react'
import { HeroScrollBanner } from "../components/bannerContainer";
import { HeroImagesSlider } from "../components/heroImageSlider";
import { FeaturesSection } from "../components/featureSection";

const Home = () => {
  return (
    <div>
        <HeroImagesSlider/>
        <HeroScrollBanner/>
        <FeaturesSection/>
    </div>
  )
}

export default Home
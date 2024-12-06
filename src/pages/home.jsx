import React from 'react'
import { HeroScrollBanner } from "../components/bannerContainer";
import { HeroImagesSlider } from "../components/heroImageSlider";
import { FeaturesSection } from "../components/featureSection";
import { TestimonialCards } from '../components/testimonialCards';

const Home = () => {
  return (
    <div>
        <HeroImagesSlider/>
        <HeroScrollBanner/>
        <FeaturesSection/>
        <TestimonialCards/>
    </div>
  )
}

export default Home
import React from 'react'
import { HeroScrollBanner } from "../components/bannerContainer";
import { HeroParallaxBanner } from "../components/heroParallaxBanner";
import { FeaturesSection } from "../components/featureSection";
import { TestimonialCards } from '../components/testimonialCards';

const Home = () => {
  return (
    <div>
        <HeroParallaxBanner/>
        <HeroScrollBanner/>
        <FeaturesSection/>
        <TestimonialCards/>
    </div>
  )
}

export default Home
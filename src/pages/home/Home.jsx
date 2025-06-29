import React from 'react'
import HomeCarousel from '../../components/homecomponents/HomeCarousel'
import FeatureCards from '../../components/homecomponents/FeatureCards'
// import ButtonsSection from '../../components/homecomponents/ButtonsSection'
// import CardsSection from '../../components/homecomponents/CardsSection'
import PopularCategories from '../../components/homecomponents/PopularCategories'

function Home() {
    return (
        <>
            <HomeCarousel />
            <FeatureCards />
            {/* <ButtonsSection /> */}
            {/* <CardsSection /> */}
            <PopularCategories/>
        </>
    )
}

export default Home
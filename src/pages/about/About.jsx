import React from 'react'
import Company from '../../components/aboutcomponents/Company'
import Team from '../../components/aboutcomponents/Team'
import Branches from '../../components/aboutcomponents/Branches'
import Facts from '../../components/aboutcomponents/Facts'

function About() {
    return (
        <>
            <Company />
            <Team />
            <Branches />
            <Facts />
        </>
    )
}

export default About
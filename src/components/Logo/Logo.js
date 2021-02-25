import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import classes from './Logo.module.css'
import rasLogoRound from '../../../content/logos/rasBNW.png'
import rasLogoTxt from '../../../content/logos/rasTxt.svg'

const logo = (props) => {
    let rasLogo=rasLogoRound
    if (props.im === 'txt')
        rasLogo=rasLogoTxt

    return(
        <div className={classes.Logo}>
            <img src={rasLogo} alt="Rasam logo"/>
            {/* <Img 
                fluid={data.rasLogo.childImageSharp.fluid}
                alt="Rasam BG"/> */}
        </div>
    )
}

export default logo

// export const query = graphql`
//         query {
//             rasLogo: file(relativePath: { eq: "rasBNW.png" }) {
//                 childImageSharp {
//                     fluid(maxWidth: 64) {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }
//         }
//     `
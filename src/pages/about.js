import React, { useState } from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import Img from "gatsby-image/withIEPolyfill"

import Layout from '../components/hoc/Layout/Layout'
import classes from '../styles/about.module.css'

import play from '../../content/icons/playEd.svg'
// import jpgBG from '../../content/images/jpg/dance3.jpg'
// import webpBG from '../../content/images/webp/dance3.webp'
import vidTh from '../../content/images/jpg/rasVidTh2.jpg'


const BgIm = {
    marginLeft: "20%",
    position: "fixed",
    top: "50%",
    left: "50%",
    maxHeight: "100%",
    width: "auto",
    // height: "auto",
    zIndex: "-100",
    transform: "translate(-50%, -50%)"
};


const about = ({data}) => {
 
    
    return(
        <Layout>
            <Img 
                fluid={data.dance3.childImageSharp.fluid}
                alt="Rasam BG"
                style={{position: "absolute"}}
                imgStyle={BgIm}/>
            {/* <img src={jpgBG} alt="Rasam BG" className={classes.BgIm}/> */}
            {/* <img src="https://res.cloudinary.com/devgeetech/image/upload/v1572350486/rasamImages/dance3_jyawmu.jpg" alt="Rasam BG" className={classes.BgIm}/> */}
            <div className={classes.grad} />
            <div className={classes.content}>
                <div className={classes.heading}>About</div>
                <div className={classes.thalluText}>
                    <p>Rasam - the cultural phenomenon that redefined the standards for 
                        techno-cultural fests, is back for its 2nd edition in 2020. <br/><br/>Experience 
                        euphoria of the highest order as young talent from across the land 
                        assemble to witness the exhibition of raw talent and the dawn of 
                        new friendships. Immerse yourself into this epic adventure where 
                        the spectacles lay endless and the memories you make, 
                        last a lifetime. <br/><br/>Join us on this grand escapade at Providence 
                        College of Engineering on 7th &#38; 8th February 2020. 
                        <br/><br/>Bring the madness. We’ve got the chaos.</p>
                </div>
                <a href="https://youtu.be/63qr9y0fh7c" rel="noopener noreferrer" target="_blank">
                    <div className={classes.vid}> 
                            <img src={play} alt="play" className={classes.playBt} />
                            <img src={vidTh} alt="Rasam aftermovie" className={classes.vidIm}/>
                    </div>
                </a>
                {/* <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/63qr9y0fh7c?controls=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe> */}
            </div>
        </Layout>

    )
}

export default about

export const query = graphql`
        query {
            dance3: file(relativePath: { eq: "jpg/dance3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `



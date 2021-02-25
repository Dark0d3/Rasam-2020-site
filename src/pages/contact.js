import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

import Layout from '../components/hoc/Layout/Layout'
import classes from '../styles/contact.module.css'

import jpgBG from '../../content/images/jpg/vibe1.jpg'
import webpBG from '../../content/images/webp/vibe1.webp'

import locpin from '../../content/icons/locpinEd.svg'
import mail from '../../content/icons/mailEd.svg'
import fb from '../../content/icons/fbEd.svg'
import insta from '../../content/icons/instaEd.svg'
import twitter from '../../content/icons/twitterEd.svg'
import youtube from '../../content/icons/youtubeEd.svg'
import linkedin from '../../content/icons/linkedinEd.svg'
import call from '../../content/icons/callEd.svg'

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


const contact = ({data}) => {
    return(
        <React.Fragment>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <title>Contact</title>
            </Helmet>
            <Layout>
                <Img 
                    fluid={data.vibe1.childImageSharp.fluid}
                    alt="Rasam BG"
                    style={{position: "absolute"}}
                    imgStyle={BgIm}/>
                {/* <img src={jpgBG} alt="Rasam BG" className={classes.BgIm}/> */}
                {/* <img src="https://res.cloudinary.com/devgeetech/image/upload/v1572350485/rasamImages/vibe1_ibwiux.jpg" alt="Rasam BG" className={classes.BgIm}/> */}
                <div className={classes.grad} />
                <div className={classes.content}>
                        <div className={classes.heading}>Contact Us</div>
                        <div className={classes.thalluText}>
                            <p className={classes.thalluMessage}>Hey there! got questions? Shoot.</p>
                            <div className={classes.contDets}>
                                {/* <div className={classes.contDet}>
                                    <img src={mail} alt="Mail icon" className={classes.svgIc}/>
                                    <a href="mailto:info@providence.edu.in">info@providence.edu.in</a>
                                </div> */}
                                <div className={classes.contDet}>
                                    <img src={locpin} alt="locpin" className={classes.svgIc}/>
                                    <a href="https://g.page/TheProvidenceCollege?share">Providence College of Engineering,
                                    Angadical South, Chengannur</a>
                                </div>


                                <div className={classes.contDetCor}>
                                    {/* <img src={mail} alt="Mail icon" className={classes.svgIc}/> */}
                                    <p className={classes.contDetCorHead}>Festival Convenor</p>
                                    <p>Jibil G Abraham</p>
                                    <div className={classes.contDetPer}>
                                        <a href="mailto:jibil.prc16me021@student.providence.edu.in">
                                            <img src={mail} alt="Mail icon" className={classes.svgIcS}/>
                                        </a>
                                        <a href="tel:+917560875764">
                                            <img src={call} alt="Call icon" className={classes.svgIcS}/>
                                        </a>
                                    </div>
                                    <p className={classes.contDetCorHead}>Cultural Festival Coordinator</p>
                                    <p>Gowrishankar M</p>
                                    <div className={classes.contDetPer}>
                                        <a href="mailto:gowrishankar.prc16me019@student.providence.edu.in">
                                            <img src={mail} alt="Mail icon" className={classes.svgIcS}/>
                                        </a>
                                        <a href="tel:+918301031626">
                                            <img src={call} alt="Call icon" className={classes.svgIcS}/>
                                        </a>
                                    </div>
                                </div>


                                <div className={classes.contDet}>
                                    <a href="https://www.facebook.com/rasambyprovidence/" rel="noopener noreferrer" target="_blank">
                                        <img src={fb} alt="locpin" className={classes.svgIc}/>
                                    </a>
                                    <a href="http://twitter.com/providencece" rel="noopener noreferrer" target="_blank">
                                        <img src={twitter} alt="locpin" className={classes.svgIc}/>
                                    </a>
                                    <a href="http://instagram.com/rasam.by.providence" rel="noopener noreferrer" target="_blank">
                                        <img src={insta} alt="locpin" className={classes.svgIc}/>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCAm705PUEV-Xq5lrE2Dn-fA" rel="noopener noreferrer" target="_blank">
                                        <img src={youtube} alt="locpin" className={classes.svgIc}/>
                                    </a>
                                    <a href="https://www.linkedin.com/school/providencece/" rel="noopener noreferrer" target="_blank">
                                        <img src={linkedin} alt="locpin" className={classes.svgIc}/>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </Layout>
        </React.Fragment>


    )
}

export default contact

export const query = graphql`
        query {
            vibe1: file(relativePath: { eq: "jpg/vibe1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `
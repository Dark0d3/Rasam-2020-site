import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

import Layout from '../components/hoc/Layout/Layout'
import classes from '../styles/events.module.css'

import rasLogo from '../../content/logos/rasTxt.svg'
import fb from '../../content/icons/fbEd.svg'
import insta from '../../content/icons/instaEd.svg'
import twitter from '../../content/icons/twitterEd.svg'
import youtube from '../../content/icons/youtubeEd.svg'
import linkedin from '../../content/icons/linkedinEd.svg'

import Card from '../components/card/card'

const BgIm = {
    position: "absolute",
    top: "-15%",
    height: "100%",
    maxHeight: "800px",
    width: "100%",
    minWidth: "50%",
    zIndex: "-100",
    borderRadius: "1.5rem",
};


const events = ({data}) => {
    return(
        <React.Fragment>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <title>Rasam Events</title>
            </Helmet>
            <Layout>
                
                <div className={classes.evWrap}>
                    <div className={classes.heroTitleWrap}>
                        <Img 
                            fluid={data.job1.childImageSharp.fluid}
                            alt="Rasam BG"
                            style={{height: "100%"}}
                            imgStyle={BgIm} />
                            {/* style={{position: "absolute"}}/> */}
                        <p className={classes.heroTitle}>EVENTS</p> 
                    </div>
                    <div className={classes.heroContSrch}>
                        <div className={classes.heroContSrchIt}>Contests</div>
                        <div className={classes.heroContSrchIt}>Concerts</div>
                        <div className={classes.heroContSrchIt}>Workshops</div>
                    </div>
                    <div className={classes.heroCont}>
                        {data.allContentfulCompetition.edges.map(node => {
                            return(
                                <Card 
                                    name={node.node.rasamName} 
                                    excerpt={node.node.excerpt.excerpt}
                                    fixed={node.node.thumbnail.fixed}
                                    slug={node.node.slug}/>
                            )
                        })}
                    </div>
                </div>

                <div className={classes.ftWrap}>
                    <div className={classes.ftCol}>
                        <img src={rasLogo} className={classes.rasLogo}/>
                        <ul className={classes.navLinks}>
                            <Link to="/">HOME</Link>
                            <Link to="/events">EVENTS</Link>
                            <Link to="/about">ABOUT</Link>
                            <Link to="/contact">CONTACT</Link>
                        </ul>
                    </div>
                    <div className={classes.ftCol}>
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
            </Layout>
        </React.Fragment>
        
    )
}

export default events

export const query = graphql`
        query {
            job1: file(relativePath: { eq: "jpg/job2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            allContentfulCompetition(sort: {fields: rasamName}) {
                edges {
                node {
                    rasamName
                    thumbnail {
                        fixed(height: 320, width: 200, quality: 90) {
                            ...GatsbyContentfulFixed_withWebp
                        }
                    }
                    excerpt {
                        excerpt
                    }
                    slug
                }
                }
            }
        }
    `
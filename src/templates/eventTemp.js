import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Img from "gatsby-image"

import Layout from '../components/hoc/Layout/Layout'
import classes from './eventTemp.module.css'

export const query = graphql`
  query($slug: String!) {
    contentfulCompetition(slug: { eq: $slug }) {

        description {
          json
        }
        id
        primary {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        rasamName
        rules {
          json
        }
        slug
        originalName
        regLink
      }
  }
`

// const BgIm = {
//     marginLeft: "42%",
//     position: "fixed",
//     top: "50%",
//     left: "50%",
//     maxHeight: "100%",
//     width: "auto",
//     zIndex: "-100",
//     transform: "translate(-50%, -50%)",
//     borderRadius: "1.5rem",
// };

const BgImB = typeof window !== `undefined` ? 
        window.innerWidth >1200 ?
            {
                marginLeft: "42%",
                position: "fixed",
                top: "50%",
                left: "50%",
                maxHeight: "100%",
                width: "auto",
                zIndex: "-100",
                transform: "translate(-50%, -50%)",
                borderRadius: "1.5rem",
                background: 'linear-gradient(90deg, rgba(2,0,36,0) 52%, rgba(18,18,18,0.9) 100%)'
            } :
            {
                marginLeft: "50%",
                position: "fixed",
                top: "50%",
                left: "50%",
                maxHeight: "100%",
                width: "auto",
                zIndex: "-100",
                transform: "translate(-50%, -50%)",
                borderRadius: "1.5rem",
            } : null;

const BgIm = typeof window !== `undefined` ? 
    window.innerWidth <640 ?
        {
            position: "absolute",
            width: "100%",
            // height: "10rem",
            // top: "-15%",
            height: "100%",
            // maxHeight: "800px",
            // minwidth: "100%",
            // minWidth: "50%",
            zIndex: "-100",
            borderRadius: "1.5rem",
        } : BgImB : null;

const eventTemp = props => {

    

    return (
        <React.Fragment>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <title>{props.data.contentfulCompetition.rasamName}</title>
            </Helmet>
            <Layout>
                <div className={classes.evFullWrap}>
                    <div className={classes.evTempWrap}>
                        <div className={classes.imWrap}>
                            <Img 
                                fluid={props.data.contentfulCompetition.primary.fluid}
                                alt={props.data.contentfulCompetition.rasamName}
                                style={{position: "absolute", width: "100%"}}
                                imgStyle={BgIm} />
                        </div>
                        <div className={classes.contWrap}>
                            <div className={classes.contTitle}>{props.data.contentfulCompetition.rasamName}</div>
                            <div className={classes.contSubTitle}>({props.data.contentfulCompetition.originalName})</div>
                            {documentToReactComponents(props.data.contentfulCompetition.description.json)}
                            <Link to={`/events/${props.data.contentfulCompetition.slug}/rules`} className={classes.rulesReg}>Rules &amp; Regulations</Link>
                            <a href={props.data.contentfulCompetition.regLink} className={classes.regButtWrap} rel="noopener noreferrer" target="_blank">
                                <div className={classes.regButtLink}>
                                    Register
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default eventTemp
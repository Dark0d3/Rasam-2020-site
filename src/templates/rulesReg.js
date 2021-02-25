import React, { useState } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Img from "gatsby-image"

import Layout from '../components/hoc/Layout/Layout'
import classes from './rulesReg.module.css'

export const query = graphql`
  query($slug: String!) {
    contentfulCompetition(slug: { eq: $slug }) {
        id
        rasamName
        rules {
          json
        }
      }
  }
`

const rulesReg = (props) => {
    return(
        <React.Fragment>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <title>{props.data.contentfulCompetition.rasamName} Rules</title>
            </Helmet>
            <Layout>
                <div className={classes.rulesWrap}>
                    <div className={classes.mainTitle}>Rules &amp; Regulations</div>
                    <div className={classes.evTitle}>{props.data.contentfulCompetition.rasamName}</div>
                    {documentToReactComponents(props.data.contentfulCompetition.rules.json)}
                </div>
            </Layout>
        </React.Fragment>
        
    )
}

export default rulesReg
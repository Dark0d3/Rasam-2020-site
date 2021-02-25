import React, { useState } from "react";

import { Helmet } from "react-helmet"

import Layout from '../components/hoc/Layout/Layout'
import Spinner from '../components/UI/Spinner/Spinner'

import classes from '../styles/index.module.css'
import HeroPCVid from '../../content/vids/rasGli.mp4'
import HeroMobVid from '../../content/vids/rasGliMob.mp4'
import HeroPCVidWebM from '../../content/vids/rasGli.webm'
import HeroMobVidWebM from '../../content/vids/rasGliMob.webm'


const IndexPage = () => {

    const disp = typeof window !== `undefined` ? 
        window.innerWidth >1200 ?
            <React.Fragment>
                <video className={classes.vid} width="1920" height="1080" autoPlay="autoPlay" loop muted="muted" >
                    <source src={HeroPCVidWebM} type="video/webm"/>
                    <source src={HeroPCVid} type="video/mp4"/>
                </video>
            </React.Fragment> :
            <React.Fragment>
                <video className={classes.mobVid} width="1920" height="1080" autoPlay="autoPlay" loop muted="muted">
                    <source src={HeroMobVidWebM} type="video/webm"/>
                    <source src={HeroMobVid} type="video/mp4"/>
                </video> 
            </React.Fragment> : null;

    return(
        <React.Fragment>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <title>RASAM</title>
            </Helmet>
            <Layout>
                {disp}
            </Layout>
        </React.Fragment>

    )
} 

export default IndexPage

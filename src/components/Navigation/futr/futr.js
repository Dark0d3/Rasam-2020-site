import React from "react"

import { Link } from "gatsby"

import classes from './futr.module.css'

// import rasam from '../../../content/logos/rasWhTx.svg'

import fb from '../../../../content/icons/fbEd.svg'
import insta from '../../../../content/icons/instaEd.svg'
import twitter from '../../../../content/icons/twitterEd.svg'
import youtube from '../../../../content/icons/youtubeEd.svg'
import linkedin from '../../../../content/icons/linkedinEd.svg'



const Futr = () => {
    
    return(
        <div className={classes.ftWrap}>
            <div className={classes.ftCol}>
                {/* <img src={prodesLogo} className={classes.rasLogo}/> */}
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
    )
}

export default Futr;
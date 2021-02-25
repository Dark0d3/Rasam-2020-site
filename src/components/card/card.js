import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

// import jobImg from '../../../content/images/jpg/job1.jpg'

import classes from './card.module.css'

const cardImStyles = {
    // marginLeft: "20%",
    // position: "absolute",
    // top: "-15%",
    // right: "35%",
    // height: "5rem",
    // maxHeight: "5rem",
    // width: "2rem",
    // maxWidth: "2rem",
    // height: "auto",
    // zIndex: "100",
    borderRadius: "1rem",
    
    // transform: "translate(-50%, 0%)"
};

// const card = (props) => {
//     return(
//         <StaticQuery
//             query={graphql`
//                      query {
//                          cardIm: file(relativePath: { eq: "jpg/rasVidTh2.jpg" }) {
//                              childImageSharp {
//                                  fixed(width: 200, height: 320, quality: 90) {
//                                      ...GatsbyImageSharpFixed_withWebp
//                                  }
//                              }
//                          }
//                      }
//                  `}
                 
//             render={data => (
//                 <Link className={classes.cardThing} to='/contact'>
//                     <div className={classes.grad}></div>
//                     <Img 
//                         fixed={data.cardIm.childImageSharp.fixed}
//                         alt="Rasam event"
//                         imgStyle={cardImStyles}/>
//                     <div className={classes.cardCon}>
//                         <div className={classes.cardConTitle}>Solo Singing</div>
//                         <div className={classes.cardConTx}>
//                             Dance in full swing like a 
//                             pendulum and lose yourself into the world of 
//                             dance
//                         </div>
//                     </div>
                    
//                 </Link >
//             )}
//         />  
//     )
// }

const card = (props) => {
    console.log(props)
    return(
        <Link className={classes.cardThing} to={`/events/${props.slug}`}>
            <div className={classes.grad}></div>
            <Img 
                fixed={props.fixed}
                alt="Rasam event"
                imgStyle={cardImStyles}/>
            <div className={classes.cardCon}>
                <div className={classes.cardConTitle}>{props.name}</div>
                <div className={classes.cardConTx}>{props.excerpt}</div>
            </div> 
        </Link>
    )
}

export default card



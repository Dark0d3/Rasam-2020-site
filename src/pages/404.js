import React from 'react'


import Layout from '../components/hoc/Layout/Layout'
import classes from '../styles/404.module.css'


const page404 = () => {
    return(
        <Layout>
            <div className={classes.logo}>
                <b>E<span>RR</span>OR <span>4</span>04</b>
            </div>
        </Layout>
    )
}

export default page404

import React, { useState } from 'react'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
    
    // const [hi, ho] = useState(0)
    const logoIm = typeof window !== `undefined` ? 
        window.innerWidth <640 ?
            <Logo im='txt'/> :
            <Logo im='rou' /> : null;

    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked = {props.drawerToggleClicked} />
            <div className={classes.Logo}>
                {/* <Logo /> */}
                {logoIm}
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
            <div className={classes.Space}></div>
        </header>
    );
}

   

export default toolbar;
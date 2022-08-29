import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import styles from '../LandingPage/LandingPage.module.css'

export default function LandingPage(){
    return(
        <Fragment>
            <div className={styles.hero}>
                <img src={require("../../assets/puppyLanding.gif" )}alt="" className={styles.gif}/>
                <h3 className={styles.pretitle}>Welcome to</h3>
                <h1 className={styles.title}>Doggopedia</h1>
                <Link to='/home'>
                    <button className={styles.botIn}>Let's go for a walk</button>
                </Link>
            </div>
        </Fragment>
    )
}
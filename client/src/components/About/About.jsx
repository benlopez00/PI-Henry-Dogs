import { Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./About.module.css";

export default function About() {
    return (
        <Fragment>
            <NavBar />
            <div className={styles.mainConteinerAbout}>
                <h6>Eduardo Benjamin Lopez Avila</h6>
                <h6>
                    PERN Full Stack Developer
                </h6>
                <div className={styles.links}>
                    <h6>Contact me:</h6>
                    <h5>
                        <a href="https://github.com/benlopez00" target='_blank' rel="noreferrer">GitHub</a>
                    </h5>
                </div>
            </div>
        </Fragment>
    );
}

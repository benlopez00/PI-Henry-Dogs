import React, { Fragment } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
	return (
		<Fragment>
			<div className={styles.nav}>
				<div className={styles.TitleAndSearchBar}>
					<div className={styles.logoAndTitle}>
						<Link to="/home">
							<img
							id="logoHenry"
							src={require ("../../assets/puppyLogo.jpg")}
							alt="a happy dog icon"
							className={styles.logo}/>
						</Link>
						<div>
							<h1>Doggopedia</h1>
							<p>the most woofing page!</p>
						</div>
					</div>
					<div>
						<SearchBar />
					</div>
				</div>
				<div className={styles.aboutNavButton}>
					<Link to="/about" className={styles.aboutText}>About</Link>
				</div>
			</div>
		</Fragment>
	);
}

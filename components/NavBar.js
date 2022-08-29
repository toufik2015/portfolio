import Link from "next/link";
import React from "react";
import classes from "./NavBar.module.css";
import DownloadIcon from "./UI/icons/DownloadIcon";
Link;

function NavBar() {
  return (
    <nav className={classes["nav-bar"]}>
      <div className={classes.logo}>
        <h1>ToDev</h1>
      </div>
      <ul className={classes["nav-links"]}>
        <li className={classes["nav-link"]}>
          <Link href="#Home">
            <a>Home</a>
          </Link>
        </li>
        <li className={classes["nav-link"]}>
          <Link href="#Mywork">
            <a>My work</a>
          </Link>
        </li>
        <li className={classes["nav-link"]}>
          <Link href="#Contact">
            <a>Contact</a>
          </Link>
        </li>
        <li className={classes["primary-btn"]}>
          <Link href="#Resume">
            <a>
              Resume <DownloadIcon />{" "}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from "react";
import classes from "./HeroSection.module.css";
import SectionContainer from "./UI/layout/SectionContainer";
import Link from "next/link";
import DownloadIcon from "./UI/icons/DownloadIcon";
import FlatArrowIcon from "./UI/icons/FlatArrowIcon";

function HeroSection() {
  return (
    <section id="mywork" className={classes["hero-section"]}>
      <SectionContainer>
        <div className={classes["hero-content"]}>
          <h3>I&apos;m Taoufik Nefouci</h3>
          <h1>Frontend Web Developer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            blandit posuere elit vitae pulvinar. Quisque in tellus fringilla,
            vehicula odio ut, hendrerit lectus.
            <span> Pellentesque</span> quis mi vitae dui vestibulum gravida ac
            laoreet felis. Nam a efficitur felis. Nulla porttitor consequat.
          </p>
          <div className={classes["actions"]}>
            <div className={classes["primary-btn"]}>
              <Link href="#Resume">
                <a>
                  Resume <DownloadIcon />
                </a>
              </Link>
            </div>
            <div className={classes["secondary-btn"]}>
              <Link href="/#mywork">
                <a>
                  My work <FlatArrowIcon />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default HeroSection;

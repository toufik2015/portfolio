import React from "react";
import SectionContainer from "./UI/layout/SectionContainer";
import classes from "./GallerySection.module.css";
import Gallery from "./UI/Gallery";

function GallerySection() {
  return (
    <section className={classes["gallery-section"]}>
      <SectionContainer>
        <h3 className={classes["ternary-heading"]}>My work</h3>
        <h2 className={classes["secondary-heading"]}>
          Projects I have worked on
        </h2>
        <Gallery />
      </SectionContainer>
    </section>
  );
}

export default GallerySection;

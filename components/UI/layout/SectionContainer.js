import React from "react";
import classes from "./SectionContainer.module.css";

function SectionContainer(props) {
  return <div className={classes.container}> {props.children} </div>;
}

export default SectionContainer;

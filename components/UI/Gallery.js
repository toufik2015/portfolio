import React from "react";
import { useState } from "react";
import Image from "next/image";
import FlatArrowRight from "./icons/FlatArrowRight";
import FlatArrowIconLeft from "./icons/FlatArrowIconLeft";
import classes from "./Gallery.module.css";
import img1 from "../../public/gallery/1.jpg";
import img2 from "../../public/gallery/2.jpg";
import img3 from "../../public/gallery/3.jpg";
import img4 from "../../public/gallery/4.jpg";
import img5 from "../../public/gallery/5.jpg";
function Gallery() {
  const [translateVal, setTranslateVal] = useState(-14);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [loaded, setLoaded] = useState(false);

  const projects = [
    {
      title: "CRM Admin Dashbord 1",
      description:
        "Quis magna deserunt excepteur ullamco. In nisi incididunt occaecat proident cupidatat laborum anim cillum anim nulla",
      img: img1,
    },
    {
      title: "CRM Admin Dashbord 2",
      description:
        "Quis magna deserunt excepteur ullamco. In nisi incididunt occaecat proident cupidatat laborum anim cillum anim nulla",
      img: img2,
    },
    {
      title: "CRM Admin Dashbord 3",
      description:
        "Quis magna deserunt excepteur ullamco. In nisi incididunt occaecat proident cupidatat laborum anim cillum anim nulla",
      img: img3,
    },
    {
      title: "CRM Admin Dashbord 4",
      description:
        "Quis magna deserunt excepteur ullamco. In nisi incididunt occaecat proident cupidatat laborum anim cillum anim nulla",
      img: img4,
    },
    {
      title: "CRM Admin Dashbord 5",
      description:
        "Quis magna deserunt excepteur ullamco. In nisi incididunt occaecat proident cupidatat laborum anim cillum anim nulla",
      img: img5,
    },
  ];
  const nextSlide = () => {
    if (currentIndex === 0) return;
    setTranslateVal((state) => state + 27);

    setCurrentIndex((state) => (state -= 1));
  };
  const prevSlide = () => {
    if (currentIndex >= projects.length - 1) return;

    setTranslateVal((state) => state - 27);
    setCurrentIndex((state) => (state += 1));
  };

  const generateStyle = (s) => {
    const thumbNailStyle = {
      transform: `translate(${translateVal}rem) ${
        currentIndex === s ? "scale(1.2)" : ""
      }`,
      zIndex: currentIndex === s ? "999" : "",
      boxShadow: currentIndex === s ? "0px 5px 5px 0px #0d0b12" : "",
    };
    return thumbNailStyle;
  };

  return (
    <div>
      <div className={classes["gallery-content"]}>
        <div className={classes["gallery-preview"]}>
          <div className={classes["preview-footer"]}>
            <div className={classes["project-description"]}>
              <h3> {projects[currentIndex].title} </h3>
              <p>{projects[currentIndex].description}</p>
            </div>
            <button>
              Details <FlatArrowRight />
            </button>
          </div>
          <Image
            onLoad={() => {
              setLoaded(true);
            }}
            layout="fill"
            objectFit="cover"
            src={projects[currentIndex].img}
            style={{ opacity: loaded ? 1 : 0 }}
          />
        </div>
        <div div className={classes["gallery-items"]}>
          <div className={classes["gallery-item"]} style={generateStyle(0)}>
            <Image layout="fill" objectFit="cover" src={projects[0].img} />
          </div>
          <div className={classes["gallery-item"]} style={generateStyle(1)}>
            <Image layout="fill" objectFit="cover" src={projects[1].img} />
          </div>
          <div
            className={`${classes["gallery-item"]} ${classes["current-item"]}`}
            style={generateStyle(2)}
          >
            <Image layout="fill" objectFit="cover" src={projects[2].img} />
          </div>
          <div className={classes["gallery-item"]} style={generateStyle(3)}>
            <Image layout="fill" objectFit="cover" src={projects[3].img} />
          </div>
          <div className={classes["gallery-item"]} style={generateStyle(4)}>
            <Image layout="fill" objectFit="cover" src={projects[4].img} />
          </div>
          <button onClick={nextSlide} className={classes["gallery-btn1"]}>
            <FlatArrowIconLeft />
          </button>
          <button onClick={prevSlide} className={classes["gallery-btn2"]}>
            <FlatArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";

import Image from "next/image";

import cx from "classnames";
import styles from "../styles/Style.module.sass";

const ParallaxTest = ({ page }) => {
  const sceneEl = useRef(null);
  console.log("here: ", page.title);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <div className={styles[`${page.className}--wrapper`]}>
      <div
        ref={sceneEl}
        className={styles[`${page.className}--wrapper__content`]}
      >
        <div
          // data-depth="0.4"
          className={cx(
            "layer",
            styles[`${page.className}--wrapper__content--title`]
          )}
        >
          <h1 className={styles["page-title"]}>{page.title}</h1>
          <h2 className={styles["page-subtitle"]}>{page.subtitle}</h2>
        </div>
        {/* <div className={styles["shape-container"]}> */}
        <div data-depth="3.5" className={cx("layer", styles["triangle"])}></div>
        <div
          data-depth="0.3"
          className={cx("layer", styles["triangleB"])}
        ></div>
        <div
          data-depth="0.8"
          className={cx("layer", styles["triangle2"])}
        ></div>
        <div
          data-depth="1.9"
          className={cx("layer", styles["triangle3"])}
        ></div>
        <div
          data-depth="0.5"
          className={cx("layer", styles["rectangle"])}
        ></div>
        <div className={styles["bottom-arrow-container"]}>
          <div
            className={cx(styles["bottom-arrow"], styles["bottom-arrow--1"])}
          ></div>
          <div
            className={cx(styles["bottom-arrow"], styles["bottom-arrow--2"])}
          ></div>
          <div
            className={cx(styles["bottom-arrow"], styles["bottom-arrow--3"])}
          ></div>
        </div>
        {/* </div> */}
        {page.img && (
          <div
            className="layer"
            data-depth="0.1"
            className={styles[`${page.className}--wrapper__content--image`]}
          >
            <Image
              src={`/img/${page.img}`}
              width="auto"
              height="auto"
              // layout="fill"
            />
          </div>
        )}
        {/* <div className="layer">hallo</div>
        <div className="layer">zwei</div> */}
      </div>
    </div>
  );
};

export default ParallaxTest;

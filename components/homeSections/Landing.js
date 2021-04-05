import React, { useEffect, useRef } from "react"
import Parallax from "parallax-js"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import cx from "classnames"
import styles from "../../styles/homeSections/Landing.module.sass"

const Landing = () => {
  const sceneEl = useRef(null)

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      // hoverOnly: true,
    })

    parallaxInstance.enable()

    return () => parallaxInstance.disable()
  }, [])

  return (
    <div className={styles["landing--wrapper"]}>
      <div
        // data-depth="0.4"
        className={cx("layer", styles["landing--wrapper--title"])}
      >
        <h1 className={styles["page-title"]}>SRPG</h1>
        <h2 className={styles["page-subtitle"]}>Works by Serious Pigeon.</h2>
      </div>
      <div ref={sceneEl} className={styles["landing--wrapper__content"]}>
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

        <div
          className="layer"
          data-depth="0.1"
          className={styles["landing--wrapper__content--image"]}
        >
          <Image src={`/img/pigeon.png`} width="auto" height="auto" />
        </div>
      </div>
    </div>
  )
}

export default Landing

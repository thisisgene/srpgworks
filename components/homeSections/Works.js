import React, { useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styles from "../../styles/homeSections/Workssection.module.sass"

const works = ({ inFrame }) => {
  const transition = {
    duration: 0.9,
    ease: [0.43, 0.13, 0.23, 0.96],
  }
  const controls = useAnimation()
  const { ref, inView } = useInView()
  console.log("works = ", inFrame)
  useEffect(() => {
    if (inFrame) {
      controls.start("visible")
    }
    if (!inFrame) {
      controls.start("hidden")
    }
  }, [controls, inFrame])
  const titleVariants = {
    hidden: {
      x: "-120%",
      transition: {
        delay: 0.3,
        duration: 1,
        type: "spring",
        bounce: 0.2,
      },
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        type: "spring",
        bounce: 0.2,
      },
    },
  }
  const imageVariants = {
    hidden: {
      x: "120%",
      transition: {
        delay: 0.3,
        duration: 1,
        type: "spring",
        bounce: 0.2,
      },
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        type: "spring",
        bounce: 0.2,
      },
    },
  }
  return (
    <motion.div className={styles["section-works"]}>
      <motion.div className={styles["section-works--left"]}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className={styles["section-works--left__title"]}
        >
          <motion.h1>WORKS</motion.h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            commodo semper libero, a congue eros maximus eget. Nulla quam metus,
            sagittis et nibh vel, tincidunt faucibus erat. Maecenas elit elit,
            rutrum at tristique vitae, eleifend dictum ipsum. Nulla nisl dui,
            vulputate ut nibh vitae, fermentum iaculis nulla. Praesent sit amet
            diam eget erat tristique rutrum vitae non nunc.
          </p>
          <Link scroll={false} href="/works">
            See all
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        className={styles["section-works--right"]}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={transition}
          className={styles["section-works--right__image"]}
          src="/img/works_back.jpg"
        ></motion.img>
      </motion.div>
    </motion.div>
  )
}

export default works

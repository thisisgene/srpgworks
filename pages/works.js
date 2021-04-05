import React from "react"
import { motion } from "framer-motion"
import ReactFullpage from "@fullpage/react-fullpage"
import Link from "next/link"

import cx from "classnames"
import styles from "../styles/Style.module.sass"

const works = () => {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
  return (
    <>
      <motion.div
        initial={{
          x: "500px",
        }}
        animate={{ x: "0" }}
        className={cx("section", styles["home"])}
      >
        <motion.h1 layoutId="title-works">WORKS</motion.h1>
        <div className={styles[""]}></div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={transition}
          src={"/img/pigeon.png"}
        />
        <Link href="/#works">BACK</Link>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </motion.div>
      <div className={styles["fullscreen-back"]} />
    </>
  )
}

export default works

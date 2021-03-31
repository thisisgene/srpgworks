import React from "react";
import { motion } from "framer-motion";

const works = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // className={styles["page-title"]}
        layoutId="title-works"
      >
        WORKS
      </motion.h1>
    </div>
  );
};

export default works;

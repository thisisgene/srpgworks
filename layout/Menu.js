import React from "react";
import Image from "next/image";

import styles from "../styles/Menu.module.sass";

const Menu = () => {
  return (
    <div className={styles["menu"]} id="menu">
      <div className={styles["menu--title"]}>
        <Image
          className={styles["menu--title__img"]}
          src={"/img/eye.png"}
          width="10px"
          height="10px"
        />
        <div className={styles["menu--title__text"]}>
          <a data-menuanchor="home" href="#home">
            SRPG
          </a>
        </div>
      </div>
      <div className={styles["menu--nav"]}>
        <ul>
          <li>
            <a data-menuanchor="works" href="#works">
              WORKS
            </a>
            <div className={styles["li-sub"]}>All of the serious works.</div>
          </li>
          <li>
            <a data-menuanchor="about" href="#about">
              ABOUT
            </a>
            <div className={styles["li-sub"]}>Why so serious, pigeon?</div>
          </li>
          <li>
            <a data-menuanchor="contact" href="#contact">
              CONTACT
            </a>
            <div className={styles["li-sub"]}>Reach out and get in touch.</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

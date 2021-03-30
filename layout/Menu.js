import React from "react";
import Image from "next/image";

import styles from "../styles/Menu.module.sass";

const Menu = () => {
  return (
    <div className={styles["menu"]}>
      <div className={styles["menu--title"]}>
        <Image
          className={styles["menu--title__img"]}
          src={"/img/eye.png"}
          width="10px"
          height="10px"
        />
        <div className={styles["menu--title__text"]}>SRPG</div>
      </div>
      <div className={styles["menu--nav"]}>
        <ul>
          <li>
            WORKS
            <div className={styles["li-sub"]}>
              Find all the works of Serious Pigeon.
            </div>
          </li>
          <li>ABOUT</li>
          <li>
            CONTACT
            <div className={styles["li-sub"]}>
              Reach out and get in contact.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

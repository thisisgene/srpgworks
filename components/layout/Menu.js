import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../styles/Menu.module.sass"

const Menu = () => {
  const router = useRouter()

  return (
    <nav className={styles["menu"]} id="menu">
      <div className={styles["menu--title"]}>
        <Image
          className={styles["menu--title__img"]}
          src={"/img/eye.png"}
          width="10px"
          height="10px"
        />
        <div className={styles["menu--title__text"]}>
          {router.route === "/" ? (
            <a href="#home" data-menuanchor="home">
              SRPG
            </a>
          ) : (
            <Link href={"/"} data-menuanchor="home">
              SRPG
            </Link>
          )}
        </div>
      </div>
      {router.route === "/" && (
        <div className={styles["menu--nav"]}>
          <ul>
            <li>
              <a href="#works" data-menuanchor="works">
                WORKS
              </a>

              <div className={styles["li-sub"]}>All of the serious works.</div>
            </li>
            <li>
              <a href="#about" data-menuanchor="about">
                ABOUT
              </a>

              <div className={styles["li-sub"]}>Why so serious, pigeon?</div>
            </li>
            <li>
              <a href="#contact" data-menuanchor="contact">
                CONTACT
              </a>

              <div className={styles["li-sub"]}>
                Reach out and get in touch.
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Menu

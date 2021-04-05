import Head from "next/head"

import Menu from "./Menu"
import styles from "../../styles/Layout.module.sass"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Works by Serious Pigeon</title>
        <meta
          name="description"
          content="This is the portfolio of Serious Pigeon web development."
        />
        <meta
          name="keywords"
          content="Web development, web design, programming, HTML, CSS, Javascript, js, node.js, react, react.js, next.js, gatsby, mongodb, graphql"
        />
        <meta name="author" content="Emanuel Donner" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Menu />
      <div className={styles["container"]}>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout

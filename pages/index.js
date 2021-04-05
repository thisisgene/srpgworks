import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import Head from "next/head"

import Landing from "../components/homeSections/Landing"
import Works from "../components/homeSections/Works"

import cx from "classnames"
import styles from "../styles/Style.module.sass"

class Home extends React.Component {
  state = {
    destination: "",
  }
  moveSectionDown() {
    fullpage_api.moveSectionDown()
  }

  render() {
    const anchors = ["home", "works", "about", "contact"]

    return (
      <ReactFullpage
        // navigation

        onLeave={(origin, destination, direction) => {
          this.setState({
            destination,
          })
        }}
        anchors={anchors}
        menu={"#menu"}
        css3={false}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            <div className={cx("section", styles["home"])}>
              <Landing />
            </div>
            <div className={cx("section", styles["home"])}>
              <Works
                inFrame={
                  this.state.destination.anchor === "works" ? true : false
                }
              />
            </div>
            <div className={cx("section", styles["home"])}>About</div>
            <div className={cx("section", styles["home"])}>Contact</div>

            <div className={styles["fullscreen-back"]} />
          </ReactFullpage.Wrapper>
        )}
      />
    )
  }
}

export default Home

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

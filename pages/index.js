import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Parallax from "parallax-js";

import Head from "next/head";

import ParallaxTest from "../components/ParallaxTest";

import Menu from "../layout/Menu";

import cx from "classnames";
import styles from "../styles/Style.module.sass";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullpages: [
        {
          title: "SRPG",
          subtitle: "Works by Serious Pigeon",
          text: "Section 1",
          img: "pigeon.svg",
          className: "section-one",
        },
        {
          text: "Section 2",
        },
        {
          text: "Section 3",
        },
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  moveSectionDown() {
    fullpage_api.moveSectionDown();
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <div className="App">
        <Head>
          <title>My styled page</title>
        </Head>
        <Menu />
        <ReactFullpage
          // navigation
          // pluginWrapper={pluginWrapper}
          onLeave={this.onLeave.bind(this)}
          // scrollHorizontally={true}
          // sectionsColor={this.state.sectionsColor}
          render={(comp) => (
            <ReactFullpage.Wrapper>
              {fullpages.map((page) => (
                <div
                  key={page.text}
                  className={cx("section", styles[page.className])}
                >
                  <ParallaxTest page={page} />
                </div>
              ))}
              {/* <div className="section">
                <ParallaxTest />
              </div> */}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App;

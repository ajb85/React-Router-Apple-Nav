import React, { Component } from "react";
import styles from "./SubNav.module.scss";
import logo from "../../images/mac/iMac.png";

export default class SubNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mac: [
        "MacBook",
        "MacBook Air",
        "MacBook Pro",
        "iMac",
        "iMac Pro",
        "Mac Pro",
        "Mac Mini",
        "Accessories",
        "Mojave",
        "Compare"
      ],
      ipad: "",
      iphone: "",
      watch: "",
      tv: "",
      music: ""
    };
  }
  render() {
    const section = this.props.match.params.section;
    const subsections = this.state[section];
    let links = JSON.stringify(subsections);
    if (subsections.length) {
      links = subsections.map(subsection => (
        <div key={subsection} className={styles.link}>
          <img
            src={require(`../../images/${section}/${subsection
              .split(" ")
              .join("")}.png`)}
            alt="Item"
          />
          <p>{subsection}</p>
        </div>
      ));
    }
    return <nav className={styles.subnav}>{links}</nav>;
  }
}

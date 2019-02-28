import React, { Component } from "react";
import styles from "./SubNav.module.scss";
import logo from "../../images/mac/iMac.png";
import { Link } from "react-router-dom";

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

    let links = [
      <div className={styles.link}>
        <p>
          I was lazy and only made the content for Mac okay? The coding
          principles are the same, it'd just be grunt work to finish this part!
        </p>
      </div>
    ];

    if (subsections.length) {
      links = subsections.map(subsection => (
        <Link to={`/${section}/${subsection}`}>
        <div key={subsection} className={styles.link}>
          <img
            src={require(`../../images/${section}/${subsection
              .split(" ")
              .join("")}.png`)}
            alt="Item"
          />
          <p>{subsection}</p>
        </div>
        </Link>
      ));
    }
    return <nav className={styles.subnav}>{links}</nav>;
  }
}

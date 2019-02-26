import React, { Component } from "react";
import styles from "./SubNav.module.less";

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
    //const links =
    return "Link";
  }
}

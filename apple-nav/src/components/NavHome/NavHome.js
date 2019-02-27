import React from "react";
import styles from "./NavHome.module.scss";

export default function NavHome(props) {
  const library = {
    mac: "Mac",
    ipad: "iPad",
    iphone: "iPhone",
    watch: "Watch",
    tv: "TV",
    music: "Music"
  };
  const section = library[props.match.params.section];
  return <p className={styles.content}>{section} Content</p>;
}

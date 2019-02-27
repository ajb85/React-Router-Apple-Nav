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
  const params = props.match.params;
  let section = library[params.section];
  if (params.subsection) {
    section = params.subsection;
  }

  return <p className={styles.content}>{section} Content</p>;
}

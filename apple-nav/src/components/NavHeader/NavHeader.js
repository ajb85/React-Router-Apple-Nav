import React from "react";
import styles from "./NavHeader.module.scss";
import { Route, NavLink, Link } from "react-router-dom";
import SubNav from "../SubNav";

export default function NavHeader(props) {
  const subMenuSections = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music"];

  const links = subMenuSections.map(section => (
    // Navigate to routes
    <NavLink
      to={`/${section.toLowerCase()}`}
      key={section}
      activeClassName={styles.active}
    >
      {section}
    </NavLink>
  ));
  return (
    <header>
      <nav>
        <Link to="/">
          <i className="fab fa-apple" />
        </Link>
        {links}
        <p>Support</p>
        <i className="far fa-search" />
        <i className="fal fa-shopping-bag" />
      </nav>
      <section className="subNav">
        <Route path="/:section" render={props => <SubNav {...props} />} />
      </section>
    </header>
  );
}

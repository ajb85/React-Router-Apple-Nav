import React from "react";
import styles from "./NavLinks.module.scss";
import { Route, NavLink, Link } from "react-router-dom";
import SubNav from "../SubNav";

export default function NavHeader(props) {
  const subMenuSections = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music"];

  const routes = subMenuSections.map(section => (
    <Route
      path={`/${section.toLowerCase()}`}
      render={props => <SubNav {...props} />}
    />
  ));

  const links = subMenuSections.map(section => (
    <NavLink to={`/${section.toLowerCase()}`} activeClassName={styles.active}>
      {section}
    </NavLink>
  ));
  return (
    <header>
      <nav>
        <Link to="/">
          <i class="fab fa-apple" />
        </Link>
        {links}
        <p>Support</p>
        <i class="far fa-search" />
        <i class="fal fa-shopping-bag" />
      </nav>
      {routes}
    </header>
  );
}

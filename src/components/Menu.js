import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./Menu.css"

const Menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "10px",
      textAlign: "center",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <AniLink
          cover
          to="/"
          direction="left"
          duration={3}
          style={{ textDecoration: "none" }}
          className="nav-link nav-link-ltr"
          bg="
    url(https://source.unsplash.com/random)
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    white            /* color */
  "
        >
          Home
        </AniLink>
      </li>
      <li>
        <Link
          className="nav-link nav-link-ltr"
          to="/about"
          mode="successive"
          style={{ textDecoration: "none" }}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="nav-link nav-link-ltr"
          style={{ textDecoration: "none" }}
          to="/services"
        >
          Our Services
        </Link>
      </li>
      <li>
        {/* <Link to="/blog">Blog</Link> */}
        <AniLink
          className="nav-link nav-link-ltr"
          paintDrip
          delay={2}
          duration={1}
          color="red"
          to="/blog"
          style={{ textDecoration: "none" }}
        >
          Go to Page 4
        </AniLink>
      </li>
    </ul>
  </div>
)

export default Menu

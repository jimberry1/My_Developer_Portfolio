/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./Menu"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: "80%",
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            width: "100%",
            marginTop: `2rem`,
            borderTop: "1px solid gray",
            padding: "20px",
          }}
        >
          © {new Date().getFullYear()}, Jim Berry
          <br />
          <a href="/">Facebook</a>
          <br />
          <a href="/">LinkedIn</a>
          <br />
          <a href="/">GitHub</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

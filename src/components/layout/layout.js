/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import "scss/main.scss"

import React from "react"
import PropTypes from "prop-types"
import Footer from "../footer/footer"
import HeadWithQuery from "../head/head"
import Header from "../header/header"

const Layout = ({ children }) => {
  return (
    <>
      <HeadWithQuery />
      <Header />
      <div className="content-wrap">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

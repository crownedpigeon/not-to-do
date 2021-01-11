/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import "./layout.css"


const Layout = ({children}) => {
const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
           title,
           description
        }
      }
    }
  `)

  return (
    <>
    <Helmet>
            {/* configuring site metadata */}
            <html lang="en" />
            <title>{data.site.siteMetadata?.title || 'Title'}</title>
            <meta name="description" content={data.site.siteMetadata?.description || 'description'}/>
        </Helmet>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

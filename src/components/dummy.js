import React from 'react';
import { StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query fordummy {
        site {
          siteMetadata {
            welcomeMsg
          }
        }
      }
    `}
    render={data => (
      <span>
        <br/>using StaticQuery - <h1>{data.site.siteMetadata.welcomeMsg}</h1> in functional component
      </span>
    )}
  />
)

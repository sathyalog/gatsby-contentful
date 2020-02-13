import React from "react"
import { Link } from "gatsby"
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const {data} = this.props;
    const welcome = data.site.siteMetadata.welcomeMsg;
    return (
      <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>{welcome}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link><br/>
      <Link to="/about/">Go to About Page</Link>
    </Layout>
    )
  }
}

export default IndexPage
export const pageQuery = graphql`
  query {
    site{
      siteMetadata {
        title,
        welcomeMsg
      }
    }
  }
`

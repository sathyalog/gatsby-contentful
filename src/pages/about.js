import React, { Component } from 'react';
import Layout from '../components/layout';
import {Link} from 'gatsby';
import {graphql} from 'gatsby';

export class about extends Component {
    render() {
        const {data} = this.props;
        const welcome = data.site.siteMetadata.welcomeMsg;
        return (
            <div>
                <Layout/>
                About Page<br/>
                {welcome}<br/>
                Go to<Link to="/">Home</Link>Page.
            </div>
        )
    }
}

export default about
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

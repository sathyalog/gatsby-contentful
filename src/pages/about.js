import React, { Component } from 'react';
import Layout from '../components/layout';
import {Link} from 'gatsby';

export class about extends Component {
    render() {
        return (
            <div>
                <Layout/>
                About Page<br/>
                Go to<Link to="/">Home</Link>Page.
            </div>
        )
    }
}

export default about

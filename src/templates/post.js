import React, { Component } from 'react';
import Layout from '../components/layout';

export class PostTemplate extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <section className="posts">
                        All posts displays here.
                    </section>
                </Layout>
            </div>
        )
    }
}

export default PostTemplate

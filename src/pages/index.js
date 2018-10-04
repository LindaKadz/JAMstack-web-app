import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hey y'all! Linda here!</h1>
    <p>Welcome to my first Gatsby site, and I am too excited about it!</p>
    <p>I hope to see you all at the JAMstack hackathon, I'll be participating from Kisumu, Kenya or Canada, lol!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

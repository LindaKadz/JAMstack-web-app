import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hey again!</h1>
    <p>I'll probably use Gatsby for my portfolio, I'm planning to improve it soon!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
